"use client";

import {
  getLocalStorageJson,
  updateLocalStorageJson,
} from "@/service/localStorage";
import { getProductsByIds } from "@/service/products";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const WISHLIST_LOCAL_STORAGE_KEY = "WISHLIST_LOCAL_STORAGE_KEY";
export const WISHLIST_IDS_KEY = "WISHLIST_IDS_KEY";
export const WISHLIST_PRODUCTS_KEY = "WISHLIST_PRODUCTS_KEY";

const useWishlist = () => {
  const queryClient = useQueryClient();

  const { data: wishlistIds = [] } = useQuery({
    queryKey: [WISHLIST_IDS_KEY],
    queryFn: () => getLocalStorageJson<number>(WISHLIST_LOCAL_STORAGE_KEY),
    staleTime: Infinity,
  });

  const { data: wishlistProducts = { products: [] } } = useQuery({
    queryKey: [WISHLIST_PRODUCTS_KEY, wishlistIds],
    queryFn: () => getProductsByIds(wishlistIds),
    placeholderData: keepPreviousData,
    enabled: !!wishlistIds,
  });

  const addIdToWishlist = (productId: number) => {
    if (!wishlistIds.includes(productId)) {
      const updatedWishlist = [...wishlistIds, productId];
      updateLocalStorageJson(WISHLIST_LOCAL_STORAGE_KEY, updatedWishlist);
      queryClient.invalidateQueries({ queryKey: [WISHLIST_IDS_KEY] });
    }
  };

  const removeIdFromWishlist = (productId: number) => {
    const updatedWishlist = wishlistIds.filter((id) => id !== productId);
    updateLocalStorageJson(WISHLIST_LOCAL_STORAGE_KEY, updatedWishlist);
    queryClient.invalidateQueries({ queryKey: [WISHLIST_IDS_KEY] });
  };

  const getIdWishlisted = (productId: number) =>
    wishlistIds.includes(productId);

  return {
    wishlistProducts: wishlistProducts.products,
    wishlistIds,
    addIdToWishlist,
    removeIdFromWishlist,
    getIdWishlisted,
  };
};

export default useWishlist;
