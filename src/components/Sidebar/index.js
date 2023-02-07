import React from "react";
import { components, componentsHover, datasource, datasourceHover, design, designHover, extensions, extensionsHover, functions, functionsHover, pageStructure, pageStructureHover, pages, pagesHover, settings, settingsHover, variables, variablesHover, workflows, workflowsHover } from "../svg/sidebar";
import SigleTab from "./SingleTab";

const Sidebar = ({setIsOpen}) => {

    return (
        <div className="min-h-[100vh] h-full w-20 bg-bar-bg flex flex-col items-center justify-start text-[11px]">
            <SigleTab src={components} srcHover={componentsHover} name={"Components"} setIsOpen ={setIsOpen}/>
            <SigleTab src={pages} srcHover={pagesHover} name={"Pages"} />
            <SigleTab src={pageStructure} srcHover={pageStructureHover} name={"Page Structure"} />
            <SigleTab src={datasource} srcHover={datasourceHover} name={"Data Sources"} />
            <SigleTab src={workflows} srcHover={workflowsHover} name={"Workflows"} />
            <SigleTab src={functions} srcHover={functionsHover} name={"Functions"} />
            <SigleTab src={variables} srcHover={variablesHover} name={"Variables"} />
            <SigleTab src={design} srcHover={designHover} name={"Design"} />
            <SigleTab src={extensions} srcHover={extensionsHover} name={"Extensions"} />
            <SigleTab src={settings} srcHover={settingsHover} name={"Settings"} />
        </div>
    )
}

export default Sidebar;