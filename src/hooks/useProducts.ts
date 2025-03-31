"use client";

import { getProducts, INITIAL_PRODUCTS_PAGE } from "@/service/products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useProducts = () => {
  const [page, setPage] = useState(INITIAL_PRODUCTS_PAGE);

  const queryProps = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });

  return {
    initialProductsPage: INITIAL_PRODUCTS_PAGE,
    page,
    setPage,
    ...queryProps,
  };
};

export default useProducts;
