import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <div>Products</div>
      <div>
        <Link href={"/products/1"}>p-1</Link>
      </div>
      <div>
        <Link href={"/products/2"}>p-2</Link>
      </div>
      <div>
        <Link href={"/products/3"}>p-3</Link>
      </div>
    </>
  );
};

export default Products;
