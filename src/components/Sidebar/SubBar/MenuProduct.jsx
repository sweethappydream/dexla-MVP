import React, { useContext } from "react";
// import Draggable from "react-draggable";
import { editContext } from "../../../context";
import { useDrag } from "react-dnd";

const MenuProduct = (props) => {
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
      <img src={src} alt="save prodcuts" ref={dragRef}/>
  );
};

export default MenuProduct;
