import React, { useContext } from "react";
import {
  desktop,
  desktopHover,
  dexla,
  edit,
  mobile,
  mobileHorizon,
  mobileHorizonHover,
  mobileHover,
  notification,
  pad,
  padHover,
  preview,
} from "../svg/header";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icon from "./Icon";
import { editContext, basketContext } from "../../context";
import sendData from "../../api";
import download from "downloadjs";
import fileDownload from 'js-file-download'


const theme = createTheme({
  palette: {
    primary: {
      main: "#10D48E",
    },
  },
});

const Header = () => {
  const { isEditable, setIsEditable } = useContext(editContext);
  const { basket } = useContext(basketContext);

  const toDownloadPage = async () => {
    try {
      const result = await sendData({ basket: basket });
      return fileDownload(result.data, "myapp", "application/zip");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className=" flex bg-bar-bg items-center justify-between w-full h-14 py-2">
        <img src={dexla} alt="dexla-icon" className=" ml-5" />
        <div className="flex py-2">
          <Icon src={desktop} srcHover={desktopHover} alt="desktop" />
          <Icon src={pad} srcHover={padHover} alt="pad" />
          <Icon
            src={mobileHorizon}
            srcHover={mobileHorizonHover}
            alt="mobileHorizon"
          />
          <Icon src={mobile} srcHover={mobileHover} alt="mobile" />
          <div className="flex items-center ml-5 text-xs">1920 PX 100%</div>
        </div>
        <div className="flex py-2 mr-5 justify-center items-center">
          <img
            className={`px-3 hover:bg-green rounded-sm cursor-pointer ${
              isEditable ? "bg-green" : ""
            }`}
            src={edit}
            alt="edit"
            onClick={() => setIsEditable(true)}
          />
          <img
            className={`px-3 hover:bg-green rounded-sm cursor-pointer ${
              isEditable ? "" : "bg-green"
            }`}
            src={preview}
            alt="preview"
            onClick={() => setIsEditable(false)}
          />
          <div className="bg-slate-200 h-[50px] w-[1px] ml-9"></div>
          <img
            className="ml-9 px-3 hover:bg-green rounded-sm"
            src={notification}
            alt="notify"
          />
          <div className="px-3">
            <Button
              className="h-8"
              color="primary"
              variant="contained"
              onClick={toDownloadPage}
            >
              Deploy
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
