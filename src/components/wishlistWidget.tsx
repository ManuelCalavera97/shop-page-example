"use client";

import { Button } from "./ui/button";
import useWishlist from "@/hooks/useWishlist";
import { Star } from "lucide-react";

type WishlistWidgetProps = {
  productId: number;
};

const WishlistWidget = ({ productId }: WishlistWidgetProps) => {
  const { getIsIdWishlisted, addIdToWishlist, removeIdFromWishlist } =
    useWishlist();

  const handleToggleWishlist = () => {
    if (getIsIdWishlisted(productId)) {
      removeIdFromWishlist(productId);
    } else {
      addIdToWishlist(productId);
    }
  };

  return (
    <Button
      variant={getIsIdWishlisted(productId) ? "default" : "outline"}
      size="icon"
      onClick={handleToggleWishlist}
    >
      <Star />
    </Button>
  );
};

export default WishlistWidget;
