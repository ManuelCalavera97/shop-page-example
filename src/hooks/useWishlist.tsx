"use client";

import {
  getLocalStorageJson,
  updateLocalStorageJson,
} from "@/service/localStorage";
import {
  getProductsByIds,
  INITIAL_PRODUCTS_PAGE,
  Product,
} from "@/service/products";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const WISHLIST_IDS_LOCAL_STORAGE_KEY = "WISHLIST_LOCAL_STORAGE_KEY";
export const WISHLIST_PRODUCTS_KEY = "WISHLIST_PRODUCTS_KEY";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { PRODUCTS_QUERY_KEY } from "./useProducts";

interface WishlistContextType {
  wishlistIds: number[];
  wishlistProducts: Product[];
  loadingWishlistProducts: boolean;
  addIdToWishlist: (productId: number) => void;
  removeIdFromWishlist: (productId: number) => void;
  getIsIdWishlisted: (productId: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const [wishlistIds, setWishlistIds] = useState<number[]>([]);

  //TODO: Add error handling
  const {
    data: wishlistProducts = { products: [] },
    isLoading: loadingWishlistProducts,
  } = useQuery({
    queryKey: [WISHLIST_PRODUCTS_KEY, wishlistIds],
    queryFn: () => getProductsByIds(wishlistIds),
  });

  const addIdToWishlist = (productId: number) => {
    if (!wishlistIds.includes(productId)) {
      const updatedWishlistIds = [...wishlistIds, productId];

      let foundProduct: Product | undefined;

      for (let page = INITIAL_PRODUCTS_PAGE; !foundProduct; page++) {
        const productsData = queryClient.getQueryData([
          PRODUCTS_QUERY_KEY,
          page,
        ]) as { products: Product[]; pages: number } | undefined;

        if (!productsData?.products) {
          break;
        }

        foundProduct = productsData.products.find((p) => p.id === productId);

        if (productsData.pages === page && !foundProduct) {
          break;
        }
      }

      if (foundProduct) {
        queryClient.setQueryData([WISHLIST_PRODUCTS_KEY, updatedWishlistIds], {
          products: [...wishlistProducts.products, foundProduct].sort(
            (a, b) => a.id - b.id,
          ),
        });
      }

      setWishlistIds(updatedWishlistIds);
      updateLocalStorageJson(
        WISHLIST_IDS_LOCAL_STORAGE_KEY,
        updatedWishlistIds,
      );
    }
  };

  const removeIdFromWishlist = (productId: number) => {
    const updatedWishlistIds = wishlistIds.filter((id) => id !== productId);
    const updatedWishlistProducts = wishlistProducts.products.filter(
      (product) => product.id !== productId,
    );

    queryClient.setQueryData([WISHLIST_PRODUCTS_KEY, updatedWishlistIds], {
      products: updatedWishlistProducts,
    });

    setWishlistIds(updatedWishlistIds);
    updateLocalStorageJson(WISHLIST_IDS_LOCAL_STORAGE_KEY, updatedWishlistIds);
  };

  const getIsIdWishlisted = (productId: number) =>
    wishlistIds.includes(productId);

  useEffect(() => {
    setWishlistIds(getLocalStorageJson<number>(WISHLIST_IDS_LOCAL_STORAGE_KEY));
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistProducts: wishlistProducts.products,
        loadingWishlistProducts,
        addIdToWishlist,
        removeIdFromWishlist,
        getIsIdWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export default useWishlist;
