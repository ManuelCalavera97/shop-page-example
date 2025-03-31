"use client";

import { Button } from "./ui/button";
import useWishlist from "@/hooks/useWishlist";
import { Star } from "lucide-react";

type WishlistWidgetProps = {
  productId: number;
};

const WishlistWidget = ({ productId }: WishlistWidgetProps) => {
  const { getIdWishlisted, addIdToWishlist, removeIdFromWishlist } =
    useWishlist();

  const handleToggleWishlist = () => {
    if (getIdWishlisted(productId)) {
      removeIdFromWishlist(productId);
    } else {
      addIdToWishlist(productId);
    }
  };

  return (
    <Button
      variant={getIdWishlisted(productId) ? "default" : "outline"}
      size="icon"
      onClick={handleToggleWishlist}
    >
      <Star />
    </Button>
  );
};

export default WishlistWidget;
