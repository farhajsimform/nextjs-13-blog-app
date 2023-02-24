/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IProducts } from "../types/types";

interface IModalProps {
  visible: boolean;
  handleVisible: (value: boolean) => void;
  product: IProducts | undefined;
}

export default function Modal({
  visible,
  handleVisible,
  product,
}: IModalProps) {
  return (
    <>
      {visible ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{product?.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleVisible(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {product?.description}
                  </p>
                </div>
                <div className="relative p-6 flex-auto">
                  <span className="text-pink-600 text-lg font-semibold">
                    ${product?.price}
                  </span>

                  <img
                    className="rounded-t-md"
                    src={product?.images[0]}
                    alt="image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
