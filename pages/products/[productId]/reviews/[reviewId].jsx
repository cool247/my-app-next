import React from "react";
import { useRouter } from "next/router";

const ReviewId = () => {
  const router = useRouter();

  const { reviewId, productId } = router.query;

  return (
    <div>
      Product Id {productId} ReviewId - {reviewId}
    </div>
  );
};

export default ReviewId;
