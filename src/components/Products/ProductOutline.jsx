import React from "react";

const ProductOutline = (props) => {
    const { src, num, name } = props;
    return (
        <div className="flex items-center justify-start w-96 h-36 px-8 py-10">
            <img src={src} alt="save prodcuts"/>
            <div className="flex flex-col items-start justify-center pl-8 mx-5">
                <p className=" text-2xl">{num}</p>
                <p className=" text-sm">{name}</p>
            </div>
        </div>
    )
}

export default ProductOutline;