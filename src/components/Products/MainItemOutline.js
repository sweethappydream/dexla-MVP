import React, { useContext, useEffect, useRef } from "react";
import { editContext } from "../../context";
import { useDrag, useDrop } from "react-dnd";

const MainItemOutline = ({
  index,
  moveItem,
  setIsDragging,
  setHoverIndex,
  children,
}) => {

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
      setHoverIndex(hoverIndex);
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      // if dragging down, continue only when hover is smaller than middle Y
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      // if dragging up, continue only when hover is bigger than middle Y
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
      if(dragIndex !== hoverIndex)
        {
          moveItem(dragIndex, hoverIndex);
        }
      singleProduct.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging]);

  return <div ref={dragDropRef}>{ children }</div>;
};

export default MainItemOutline;
