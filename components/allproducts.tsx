"use client";
import { FC, useState } from "react";
import { IAllProducts, IProducts } from "../types/types";
import Modal from "./modal";
import { Product } from "./product";

export const AllProducts: FC<IAllProducts> = ({ products }) => {
  const [productDetails, setProductDetails] = useState<IProducts>();
  const [visible, setVisible] = useState<boolean>(false);
  const handleShowProduct = (element: IProducts) => {
    setProductDetails(element);
    setVisible(!visible);
  };
  return (
    <>
      <div className="flex flex-wrap w-full mt-8 justify-center">
        {(products || []).map((product) => (
          <Product
            key={product.id}
            product={product}
            handleShowProduct={() => {
              handleShowProduct(product);
            }}
          />
        ))}
      </div>
      <Modal
        visible={visible}
        handleVisible={() => {
          setVisible(false);
        }}
        product={productDetails}
      />
    </>
  );
};
