import { Product } from "@/service/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import WishlistWidget from "./wishlistWidget";

const ProductCard = ({
  id,
  name,
  description,
  price,
  currency,
  category,
  stock,
}: Product) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-lg font-bold">
          {price} {currency}
        </p>
        <p className="mb-2 text-sm">
          <strong>Category:</strong> {category}
        </p>
        <p className="mb-4 text-sm">
          <strong>Stock:</strong> {stock} items
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <WishlistWidget productId={id} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
