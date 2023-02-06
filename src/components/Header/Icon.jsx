import React, { useContext } from "react";
import { responsiveContext } from "../../context";

const Icon = (props) => {
  const { src, srcHover, alt } = props;
  const { screen, setScreen } = useContext(responsiveContext);

  return (
    <div
      className={`group hover:bg-hover w-14 h-9 flex items-center justify-center rounded-md cursor-pointer ${
        screen === alt ? "bg-hover" : ""
      }`}
      onClick={() => setScreen(alt)}
    >
      <img
        src={src}
        alt={alt}
        className={`group-hover:hidden rounded-md ${
          screen === alt ? "hidden" : ""
        }`}
      />
      <img
        src={srcHover}
        alt={alt}
        className={`group-hover:block rounded-md ${
          screen === alt ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Icon;
