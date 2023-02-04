import React, { useContext } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { responsiveContext } from "../../context";

const Products = () => {
  const { screen } = useContext(responsiveContext);
  return (
    <>
      {screen === "desktop" && <DesktopView />}
      {screen === "mobile" && <MobileView />}
    </>
  );
};

export default Products;
