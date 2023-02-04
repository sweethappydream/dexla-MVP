import React from "react";
import {
  desktop,
  dexla,
  edit,
  mobile,
  mobileHorizon,
  notification,
  pad,
  preview,
} from "../svg/header";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#10D48E",
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className=" flex bg-bar-bg items-center justify-between w-full h-14 py-2">
        <img src={dexla} alt="dexla-icon" className=" ml-5" />
        <div className="flex py-2">
          <img src={desktop} alt="desktop" />
          <img src={pad} alt="pad" />
          <img src={mobileHorizon} alt="mobile-horizon" />
          <img src={mobile} alt="mobile" />
          <div className="flex items-center ml-5">1920 PX 100%</div>
        </div>
        <div className="flex py-2 mr-5">
          <img className=" px-3" src={edit} alt="edit" />
          <img className="px-3" src={preview} alt="preview" />
          <img className="pl-9 pr-3" src={notification} alt="notify" />
          <div className="px-3">
            <Button className="h-8" color="primary" variant="contained">
                Deploy
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
