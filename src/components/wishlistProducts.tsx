"use client";

import useWishlist from "@/hooks/useWishlist";
import ProductCard from "./productCard";

const WishlistProducts = () => {
  const { wishlistProducts, loadingWishlistProducts } = useWishlist();
  if (loadingWishlistProducts) {
    return <span>Loading ...</span>;
  }

  if (!wishlistProducts.length) {
    return <span className="px-4">No products wishlisted</span>;
  }

  return (
    <div className="flex flex-col gap-4 px-2">
      {wishlistProducts.map((product) => (
        <ProductCard key={`wishlist-sidebar-${product.id}`} {...product} />
      ))}
    </div>
  );
};

export default WishlistProducts;
