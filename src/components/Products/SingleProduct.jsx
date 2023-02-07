import React, { useContext, useEffect, useRef, useState } from "react";
// import Draggable from "react-draggable";
import { editContext } from "../../context";
import { useDrag, useDrop } from "react-dnd";
import MainItemOutline from "./MainItemOutline";

const SingleProduct = (props) => {
  const { src, num, name, index, moveItem, setIsDragging, setHoverIndex } = props;

  return (
    <MainItemOutline
      index={index}
      moveItem={moveItem}
      setIsDragging={setIsDragging}
      setHoverIndex={setHoverIndex}
    >
      <div className="flex items-center justify-start w-96 h-36 px-8 py-10 cursor-pointer">
        <img src={src} alt="save prodcuts" />
        <div className="flex flex-col items-start justify-center pl-8 mx-5">
          <p className=" text-2xl">{num}</p>
          <p className=" text-sm">{name}</p>
        </div>
      </div>
    </MainItemOutline>
  );
};

export default SingleProduct;
