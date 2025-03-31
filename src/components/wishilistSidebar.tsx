"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import useWishlist from "@/hooks/useWishlist";
import ProductCard from "./productCard";

const WishlistSidebar = () => {
  const { wishlistProducts } = useWishlist();

  return (
    <Sidebar side="right" variant="floating" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row items-center justify-between">
        <h2 className="text-md font-medium">Wishlisted products</h2>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-4 px-2">
          {wishlistProducts.map((product) => (
            <ProductCard key={`wishlist-sidebar-${product.id}`} {...product} />
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default WishlistSidebar;
