import React from "react";
import ProductOutline from "./ProductOutline";
import { useDrop } from "react-dnd";

const DesktopView = ({ basket, setBasket }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "product",
    drop: (item) => setBasket((basket) => [...basket, item]),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className="bg-slate-200 flex items-center justify-center w-full pt-5">
      <div
        className="flex flex-col items-center justify-start border min-h-[200px] bg-white w-[648px] border-slate-300 "
        ref={dropRef}
      >
        {basket.map((product, index) => (
          <ProductOutline
            key={index}
            src={product.src}
            name={product.name}
            num={product.num}
          />
        ))}
        {isOver && <div>Drop Here!</div>}
      </div>
    </div>
  );
};

export default DesktopView;
