import Products from "@/components/products";
import { PRODUCTS_QUERY_KEY } from "@/hooks/useProducts";
import { getProducts, INITIAL_PRODUCTS_PAGE } from "@/service/products";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PRODUCTS_QUERY_KEY, INITIAL_PRODUCTS_PAGE],
    queryFn: () => getProducts(INITIAL_PRODUCTS_PAGE),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<h2>Fantastic skeleton of 10 product cards ...</h2>}>
        <Products />
      </Suspense>
    </HydrationBoundary>
  );
}
