import React, { useCallback, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useDrop } from "react-dnd";

const DesktopView = ({ basket, setBasket }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  const [{ isOver }, dropRef] = useDrop({
    accept: "product",
    drop: (item) => setBasket((basket) => [...basket, item]),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
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
    [basket]
  );

  return (
    <div className="bg-slate-200 flex items-start justify-center w-full pt-5">
      <div
        className="flex flex-col items-center justify-start border min-h-[100vh] h-full bg-white w-[648px] border-slate-300 "
        ref={dropRef}
      >
        {basket.map((product, index) => (
          <div className="flex flex-col items-center">
            {isDragging && (
              <div
                className={` w-80 h-[1px]  ${
                  hoverIndex === index ? "bg-slate-400" : "bg-slate-200"
                }`}
              />
            )}
            <SingleProduct
              key={index}
              index={index}
              src={product.src}
              name={product.name}
              num={product.num}
              moveItem={moveItem}
              setIsDragging={setIsDragging}
              setHoverIndex={setHoverIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopView;
