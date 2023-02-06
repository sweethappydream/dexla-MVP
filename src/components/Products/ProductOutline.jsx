import React, { useContext } from "react";
// import Draggable from "react-draggable";
import { editContext } from "../../context";
import { useDrag } from "react-dnd";

const ProductOutline = (props) => {
  const { src, num, name } = props;
  const { isEditable } = useContext(editContext);
  const [{ isDragging }, dragRef] = useDrag({
      type: "product",
      item: { src, num, name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: isEditable,
    },
    [isEditable]
  );

  return (
    <div
      className="flex items-center justify-start w-96 h-36 px-8 py-10 cursor-pointer"
      ref={dragRef}
    >
      <img src={src} alt="save prodcuts" />
      <div className="flex flex-col items-start justify-center pl-8 mx-5">
        <p className=" text-2xl">{num}</p>
        <p className=" text-sm">{name}</p>
      </div>
    </div>
  );
};

export default ProductOutline;
