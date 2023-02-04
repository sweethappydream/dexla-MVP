import React from "react";
import ProductOutline from "./ProductOutline";
import { sales, save, stock } from "../svg/body";

const MobileView = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProductOutline src={save} name="Save Products" num="178+" />
      <ProductOutline src={stock} name="Stock Products" num="20+" />
      <ProductOutline src={sales} name="Sales Products" num="190+" />
      <ProductOutline src={save} name="Save Products" num="178+" />
    </div>
  );
};

export default MobileView;
