import React from "react";
import Outline from "../components/Outline";
import Products from "../components/Products";

const Home = () => {
    return (
        <Outline>
            <div className=" pt-24 pl-16">
                <Products/>
            </div>
        </Outline>
    )
}

export default Home;