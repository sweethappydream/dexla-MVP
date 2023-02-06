import React, { useState } from "react";
import Outline from "../components/Outline";
import Products from "../components/Products";
import { editContext, responsiveContext } from "../context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [screen, setScreen] = useState("desktop");
  const editValue = { isEditable, setIsEditable };
  const screenValue = { screen, setScreen };

  return (
    <editContext.Provider value={editValue}>
      <responsiveContext.Provider value={screenValue}>
        <DndProvider backend={HTML5Backend}>
          <Outline>
            <Products />
          </Outline>
        </DndProvider>
      </responsiveContext.Provider>
    </editContext.Provider>
  );
};

export default Home;
