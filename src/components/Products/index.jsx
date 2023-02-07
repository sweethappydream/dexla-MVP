import React, { useState, useContext } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { responsiveContext, basketContext } from "../../context";

const Products = () => {
  const { screen } = useContext(responsiveContext);
  const { basket, setBasket} = useContext(basketContext);
  return (
    <>
      {screen === "desktop" && <DesktopView basket={basket} setBasket={setBasket}/>}
      {screen === "mobile" && <MobileView basket={basket} setBasket={setBasket} />}
    </>
  );
};

export default Products;
