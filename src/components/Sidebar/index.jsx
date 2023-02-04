import React from "react";
import { components, datasource, design, extensions, functions, pageStructure, pages, settings, variables, workflows } from "../svg/sidebar";
import SigleTab from "./SingleTab";

const Sidebar = () => {
    return (
        <div className="h-full w-20 bg-bar-bg flex flex-col items-center justify-start text-[11px]">
            <SigleTab src={components} name={"Components"} />
            <SigleTab src={pages} name={"Pages"} />
            <SigleTab src={pageStructure} name={"Page Structure"} />
            <SigleTab src={datasource} name={"Data Sources"} />
            <SigleTab src={workflows} name={"Workflows"} />
            <SigleTab src={functions} name={"Functions"} />
            <SigleTab src={variables} name={"Variables"} />
            <SigleTab src={design} name={"Design"} />
            <SigleTab src={extensions} name={"Extensions"} />
            <SigleTab src={settings} name={"Settings"} />
        </div>
    )
}

export default Sidebar;