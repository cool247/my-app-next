import { useRouter } from "next/router";
import React from "react";

const Docs = () => {
  const router = useRouter();

  const { params } = router.query;

  console.log(params, "p");

  if (params?.length === 2) {
    return <div>viewing Feature of {params[0]} Concept of {params[1]} </div>;
  } else if (params?.length === 1) {
    return <div>viewing Feature of {params[0]} </div>;
  }

  return <div>Docs Home Page</div>;
};

export default Docs;
