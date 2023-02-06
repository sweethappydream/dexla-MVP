import React from "react";
import { Collapse } from "@mui/material";
import { cross, layout } from "../../svg/sidebar/components";
import MenuProduct from "./MenuProduct";
import { save, sales, stock } from "../../svg/body";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { inputs } from "../../svg/sidebar/components";

export default function Components({ isOpen, setIsOpen }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Collapse
      orientation="horizontal"
      in={isOpen}
      className="pl-[80px] fixed z-10"
    >
      <div className="w-[300px] bg-white min-h-[100vh] h-full p-3">
        <div className="flex justify-between">
          <p className=" text-2xl">Components</p>
          <div onClick={() => setIsOpen(false)}>
            <img
              className=" cursor-pointer"
              src={cross}
              alt="cross"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex py-4">
            <MenuProduct src={save} name="Save Products" num="178+" />
            <MenuProduct src={stock} name="Stock Products" num="20+" />
            <MenuProduct src={sales} name="Sales Products" num="190+" />
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <img src={inputs} alt="inputs" />
              <Typography className="pl-3">Inputs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                buttons, textfields, inputs, checkbox etc....
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <img src={layout} alt="layout" />
              <Typography className="pl-3">Layout</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Collapse>
  );
}
