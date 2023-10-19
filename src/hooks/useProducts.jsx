import React from "react";
import products from "../data/products.json";
import { useAppDispatch } from "../app/hooks";
import { setProduct } from "../slices/product-slice";

export default function useProducts() {
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  function fetchProduct() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setProduct(products));
      setIsLoading(false);
    }, 2000);
  }

  React.useEffect(() => {
    fetchProduct();
  }, []);

  return { isLoading, products };
}
