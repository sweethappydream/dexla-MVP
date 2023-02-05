import React, { useState } from "react";
import ProductOutline from "./ProductOutline";
import { sales, save, stock } from "../svg/body";
import { useDrop } from "react-dnd";

const DesktopView = () => {
  const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "product",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div>
      <div className="flex items-start justify-start">
        <ProductOutline src={save}  name="Save Products" num="178+" />
        <ProductOutline src={stock}  name="Stock Products" num="20+" />
        <ProductOutline src={sales}  name="Sales Products" num="190+" />
        <ProductOutline src={save}  name="Save Products" num="178+" />
      </div>
      <div className="w-full border min-h-[200px] border-slate-300 flex flex-wrap flex-start overflow-auto " ref={dropRef}>
        {basket.map(product =><ProductOutline src={product.src} name={product.name} num={product.num} />)}
        {isOver && <div>Drop Here!</div>}
      </div>
    </div>
  );
};

export default DesktopView;
