import React from "react";

const SigleTab = (props) => {
    const { src, srcHover, name } = props;
    return (
        <div className="group w-[85px] h-[54px] p-8 flex flex-col items-center justify-center  hover:bg-hover">
            <img src={src} alt="" className="pb-[6px] group-hover:hidden"/>
            <img src={srcHover} alt="" className="pb-[6px] hidden group-hover:block"/>
            <p className=" group-hover:text-white">{name}</p>
        </div>
    )
}

export default SigleTab;