import { Product } from "@/service/products";

const ProductCard = ({
  name,
  description,
  price,
  currency,
  category,
  stock,
}: Product) => {
  return (
    <div className="bg-background-alt w-full rounded-lg p-4 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <p className="mb-2 text-sm">{description}</p>
      <p className="mb-2 text-lg font-bold">
        {price} {currency}
      </p>
      <p className="mb-2 text-sm">
        <strong>Category:</strong> {category}
      </p>
      <p className="mb-4 text-sm">
        <strong>Stock:</strong> {stock} items
      </p>
      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Favorite
      </button>
    </div>
  );
};

export default ProductCard;
