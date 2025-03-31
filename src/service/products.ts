import Products from "@/assets/products.json";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  stock: number;
  category: string;
};

export const initialProductsPage = 1;

export const getProducts = async (
  page: number,
): Promise<{ products: Product[] | undefined; pages: number }> => {
  const products: Product[] | undefined = (
    Products.products as Record<string, Product[]>
  )[page];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ products, pages: Products.pages });
    }, 2000); // Resolves after 2 seconds
  });
};
