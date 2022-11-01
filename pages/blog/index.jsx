import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      Blog
      <br/>
      <h5>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
      </h5>
    </div>
  );
};

export default Blog;
