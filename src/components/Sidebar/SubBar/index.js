import React from "react";
import {  Collapse } from "@mui/material";
import { cross } from "../../svg/sidebar/components";
import ProductOutline from "../../Products/ProductOutline";
import { save, sales, stock } from "../../svg/body";

export default function Components({ isOpen, setIsOpen }) {
  console.log(isOpen);

  return (
    <Collapse orientation="horizontal" in={isOpen} className=" z-10">
      <div className="w-[300px] bg-white h-full p-3">
        <div className="flex justify-between">
          <p className=" text-2xl">Components</p>
          <div onClick={() => setIsOpen(false)}>
            <img
              className=" cursor-pointer"
              src={cross}
              alt="cross"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <ProductOutline src={save} name="Save Products" num="178+" />
          <ProductOutline src={stock} name="Stock Products" num="20+" />
          <ProductOutline src={sales} name="Sales Products" num="190+" />
        </div>
      </div>
    </Collapse>
  );
}
