import React, { useState, useContext } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { responsiveContext } from "../../context";

const Products = () => {
  const [basket, setBasket] = useState([]);
  const { screen } = useContext(responsiveContext);
  return (
    <>
      {screen === "desktop" && <DesktopView basket={basket} setBasket={setBasket}/>}
      {screen === "mobile" && <MobileView basket={basket} setBasket={setBasket} />}
    </>
  );
};

export default Products;
