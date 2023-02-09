import React from "react";
import { TextField } from "@mui/material";


const SingleProduct = (props) => {
  const { src, num, name } = props;

  const handleClick = () => {
    window.open("http://www.dexla.io", "_blank");
  };

  const SingleItem = () => {
    return name !== undefined ? (
      <div className="flex items-center justify-start w-80 h-36 px-8 py-10 cursor-pointer">
        <img src={src} alt="save prodcuts" />
        <div className="flex flex-col items-start justify-center pl-8 mx-5">
          <p className=" text-2xl">{num}</p>
          <p className=" text-sm">{name}</p>
        </div>
      </div>
    ) : ( 
      <div className="w-80 h-36 px-8 py-10 cursor-pointer">
        <TextField variant="outlined" className=" w-64" disabled onClick={handleClick} />
      </div>
    );
  };

  return (
      <div className="flex items-center justify-start w-96 h-36 px-8 py-10 cursor-pointer">
        <SingleItem/>
      </div>
  );
};

export default SingleProduct;
