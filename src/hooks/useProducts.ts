"use client";

import { getProducts, INITIAL_PRODUCTS_PAGE } from "@/service/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

const useProducts = () => {
  const [page, setPage] = useState(INITIAL_PRODUCTS_PAGE);

  const queryProps = useSuspenseQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
  });

  return {
    initialProductsPage: INITIAL_PRODUCTS_PAGE,
    page,
    setPage,
    ...queryProps,
  };
};

export default useProducts;
