"use client";

import useProducts from "@/hooks/useProducts";
import ProductCard from "./productCard";
import { Button } from "./ui/button";

const Products = () => {
  const {
    isPending,
    isFetching,
    isError,
    error,
    data,
    initialProductsPage,
    page,
    setPage,
    isPlaceholderData,
  } = useProducts();

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  if (data) {
    return (
      <div>
        <h2 className="mb-4 text-xl font-medium">Products</h2>
        {data.products && (
          <div className="lg: grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
        <div className="flex items-center justify-center gap-6 py-6">
          <Button
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === initialProductsPage}
          >
            Previous Page
          </Button>
          <Button
            onClick={() => {
              if (!isPlaceholderData && data.pages > page) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isPlaceholderData || data.pages <= page}
          >
            Next Page
          </Button>
        </div>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    );
  }
};

export default Products;
