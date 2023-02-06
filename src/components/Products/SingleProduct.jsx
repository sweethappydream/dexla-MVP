import React, { useContext, useEffect, useRef, useState } from "react";
// import Draggable from "react-draggable";
import { editContext } from "../../context";
import { useDrag, useDrop } from "react-dnd";

const SingleProduct = (props) => {
  const { src, num, name, index, moveItem, setIsDragging, setHoverIndex } = props;
  const { isEditable } = useContext(editContext);
  const [{ isDragging }, dragRef] = useDrag(
    {
      type: "singleProduct",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: isEditable,
    },
    [isEditable]
  );

  const [spec, dropRef] = useDrop({
    accept: "singleProduct",
    hover: (singleProduct, monitor) => {
      const dragIndex = singleProduct.index;
      const hoverIndex = index;
      setHoverIndex(hoverIndex)
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);
      singleProduct.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref))

  useEffect(() => {
    setIsDragging(isDragging);
  },[isDragging])

  return (
    <div
      className="flex items-center justify-start w-96 h-36 px-8 py-10 cursor-pointer"
      ref={dragDropRef}
    >
      <img src={src} alt="save prodcuts" />
      <div className="flex flex-col items-start justify-center pl-8 mx-5">
        <p className=" text-2xl">{num}</p>
        <p className=" text-sm">{name}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
