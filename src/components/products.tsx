"use client";

import useProducts from "@/hooks/useProducts";
import ProductCard from "./productCard";

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
        <h2 className="mb-4 text-xl">Products</h2>
        {data.products && (
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-3">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

        <span>Current Page: {page}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === initialProductsPage}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            if (!isPlaceholderData && data.pages > page) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPlaceholderData || data.pages <= page}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    );
  }
};

export default Products;
