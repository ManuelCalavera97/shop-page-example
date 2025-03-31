import { Star } from "lucide-react";

const WishlistBadge = () => {
  return (
    <div className="relative">
      <Star />
      <div className="absolute -right-2 -bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900">
        <span className="text-sm leading-none font-bold">3</span>
      </div>
    </div>
  );
};

export default WishlistBadge;
