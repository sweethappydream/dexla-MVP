import React, { useContext } from "react";
import MainItemOutline from "./MainItemOutline";
import { editContext } from "../../context";
import { TextField } from "@mui/material";

const SingleProduct = (props) => {
  const { item, index, moveItem, setIsDragging, setHoverIndex } = props;
  const { isEditable } = useContext(editContext);

  const handleClick = () => {
    if (!isEditable) window.open("http://www.dexla.io", "_blank");
  };

  const SingleItem = () => {
    return item.name !== undefined ? (
      <div className="flex items-center justify-start w-80 h-36 px-8 py-10 cursor-pointer">
        <img src={item.src} alt="save prodcuts" />
        <div className="flex flex-col items-start justify-center pl-8 mx-5">
          <p className=" text-2xl">{item.num}</p> 
          <p className=" text-sm">{item.name}</p>
        </div>
      </div>
    ) : ( 
      <div className="w-80 h-36 px-8 py-10 cursor-pointer">
        <TextField variant="outlined" className=" w-64" disabled={!isEditable} onClick={handleClick} />
      </div>
    );
  };

  return (
    <MainItemOutline
      index={index}
      moveItem={moveItem}
      setIsDragging={setIsDragging}
      setHoverIndex={setHoverIndex}
    >
      <SingleItem />
    </MainItemOutline>
  );
};

export default SingleProduct;
