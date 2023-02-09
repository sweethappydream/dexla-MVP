import React from "react";
import SingleProduct from "./SingleProduct";

//code
 const basket = [{"src":"img/save.svg","name":"Save Products","num":"178+"},{"src":"img/sales.svg","name":"Sales Products","num":"190+"},{},{"src":"img/save.svg","name":"Save Products","num":"178+"},{"src":"img/sales.svg","name":"Sales Products","num":"190+"},{"src":"img/stock.svg","name":"Stock Products","num":"20+"}]
//code

const Home = () => {

  return (

    <div className=" py-24 px-40">
      <div
        className="w-full border min-h-[200px] flex flex-wrap items-center justify-start overflow-auto border-slate-200 md:flex-col lg:flex-row" >
        {basket.map((product, index) => (
          <div className="flex items-center">
          <SingleProduct
            key={index}
            src={product.src}
            name={product.name}
            num={product.num}
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
