"use client";

import { getProducts, initialProductsPage } from "@/service/products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useProducts = () => {
  const [page, setPage] = useState(initialProductsPage);

  const queryProps = useQuery({
    queryKey: ["projects", page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });

  return { initialProductsPage, page, setPage, ...queryProps };
};

export default useProducts;
