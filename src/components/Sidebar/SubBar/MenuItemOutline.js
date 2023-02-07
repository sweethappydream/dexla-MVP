import React, { useContext } from "react";
import { editContext } from "../../../context";
import { useDrag } from "react-dnd";

const MenuItemOutline = ({item, children}) => {
  const { isEditable } = useContext(editContext);
  const [{ isDragging }, dragRef] = useDrag(
    {
      type: "product",
      item: {...item},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: isEditable,
    },
    [isEditable]
  );

  return <div ref={dragRef}>
    {children}
  </div>;
};

export default MenuItemOutline;
