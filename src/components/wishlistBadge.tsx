"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import useWishlist from "@/hooks/useWishlist";

const WishlistBadge = () => {
  const { toggleSidebar } = useSidebar();
  const { wishlistIds } = useWishlist();

  return (
    <Button
      onClick={toggleSidebar}
      aria-label="Show wishlist"
      className="relative"
      variant="ghost"
      size="icon"
    >
      <Star />
      {!!wishlistIds.length && (
        <div
          className={cn(
            badgeVariants({ variant: "round" }),
            "absolute -right-2 -bottom-2",
          )}
        >
          <span className="text-sm leading-none font-bold">
            {wishlistIds.length}
          </span>
        </div>
      )}
    </Button>
  );
};

export default WishlistBadge;
