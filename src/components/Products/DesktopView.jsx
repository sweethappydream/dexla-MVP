import React from "react";
import ProductOutline from "./ProductOutline";
import { sales, save, stock } from "../svg/body";

const DesktopView = () => {
  return (
    <div className="flex items-start justify-center">
      <ProductOutline src={save} name="Save Products" num="178+" />
      <ProductOutline src={stock} name="Stock Products" num="20+" />
      <ProductOutline src={sales} name="Sales Products" num="190+" />
      <ProductOutline src={save} name="Save Products" num="178+" />
    </div>
  );
};

export default DesktopView;
