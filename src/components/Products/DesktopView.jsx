import React, { useState } from "react";
import ProductOutline from "./ProductOutline";
import { useDrop } from "react-dnd";

const DesktopView = ({basket, setBasket}) => {

  const [{ isOver }, dropRef] = useDrop({
    accept: "product",
    drop: (item) =>
      setBasket((basket) =>
        [...basket, item] 
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <div className=" py-24 px-16">
      <div className="w-full min-w-[200px] border min-h-[200px] border-slate-300 flex flex-wrap flex-start overflow-auto " ref={dropRef}>
        {basket.map((product, index) =><ProductOutline key={index} src={product.src} name={product.name} num={product.num} />)}
        {isOver && <div>Drop Here!</div>}
      </div>
    </div>
  );
};

export default DesktopView;
