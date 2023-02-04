import React, { useState} from "react";
import Outline from "../components/Outline";
import Products from "../components/Products";
import { editContext, responsiveContext } from "../context";

const Home = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [screen, setScreen] = useState("desktop");
  const editValue = { isEditable, setIsEditable };
  const screenValue = { screen, setScreen };

  return (
    <editContext.Provider value={editValue}>
      <responsiveContext.Provider value={screenValue}>
        <Outline>
          <div className=" pt-24 pl-16">
            <Products />
          </div>
        </Outline>
      </responsiveContext.Provider>
    </editContext.Provider>
  );
};

export default Home;
