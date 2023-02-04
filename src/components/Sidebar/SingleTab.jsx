import React from "react";

const SigleTab = (props) => {
    const { src, name } = props;
    return (
        <div className=" w-[85px] h-[54px] p-8 flex flex-col items-center justify-center">
            <img src={src} alt="" className="pb-[6px]"/>
            <p>{name}</p>
        </div>
    )
}

export default SigleTab;