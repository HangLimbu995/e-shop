import React from "react";

export async function generateStaticParams() {
  return [{ productId: "1" }];
}

const SingleProduct = ({ params }) => {
  return <div>SingleProduct {params.productId}</div>;
};

export default SingleProduct;
