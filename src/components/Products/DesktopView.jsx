import React, { useState, useRef, useCallback } from "react";
import { useDrop } from "react-dnd";
import SingleProduct from "./SingleProduct";

const DesktopView = ({basket, setBasket}) => {

  const [{ isOver }, dropRef] = useDrop({
    accept: "product",
    drop: (item) =>
      setBasket((basket) =>
        [...basket, item] 
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
    
  });

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      
      const dragItem = basket[dragIndex];
      const hoverItem = basket[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setBasket((basket) => {
        const updatedPets = [...basket];
        updatedPets[dragIndex] = hoverItem;
        updatedPets[hoverIndex] = dragItem;
        return updatedPets;
      });
    },
    [basket],
  );

  return (
    <div className=" py-24 px-60">
      <div className={`w-full min-w-[600px] border min-h-[200px] flex flex-wrap flex-start overflow-auto ${isOver?"border-slate-700":"border-slate-200"}`} ref={dropRef}>
        {basket.map((product, index) =><SingleProduct key={index} index={index} src={product.src} name={product.name} num={product.num} moveItem={moveItem}/>)}
      </div>
    </div>
  );
};

export default DesktopView;
