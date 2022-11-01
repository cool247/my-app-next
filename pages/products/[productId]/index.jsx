import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  return <div>Product-details-page == |{router.query.productId}|</div>;
};

export default Product;
