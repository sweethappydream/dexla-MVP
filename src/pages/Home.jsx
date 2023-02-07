import React, { useState } from "react";
import Outline from "../components/Outline";
import Products from "../components/Products";
import { editContext, responsiveContext, basketContext } from "../context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [screen, setScreen] = useState("desktop");
  const [basket, setBasket] = useState([]);
  const basketValue = { basket, setBasket };
  const editValue = { isEditable, setIsEditable };
  const screenValue = { screen, setScreen };

  return (
    <editContext.Provider value={editValue}>
      <responsiveContext.Provider value={screenValue}>
        <basketContext.Provider value={basketValue}>
          <DndProvider backend={HTML5Backend}>
            <Outline>
              <Products />
            </Outline>
          </DndProvider>
        </basketContext.Provider>
      </responsiveContext.Provider>
    </editContext.Provider>
  );
};

export default Home;
