import React, {useCallback} from "react";
import SingleProduct from "./SingleProduct";
import { useDrop } from "react-dnd";
import { hover } from "@testing-library/user-event/dist/hover";

const DesktopView = ({ basket, setBasket }) => {
  
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
    [basket],
  );

  return (
    <div className="bg-slate-200 flex items-start justify-center w-full pt-5">
      <div
        className="flex flex-col items-center justify-start border h-[100vh] bg-white w-[648px] border-slate-300 "
        ref={dropRef}
      >
        {basket.map((product, index) => (
          <SingleProduct
            key={index}
            index={index}
            src={product.src}
            name={product.name}
            num={product.num}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopView;
