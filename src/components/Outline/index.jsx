import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Outline = ({children}) => {
    return (
        <>
            <Header/>
            <div className="flex">
                <Sidebar/>
                {children}
            </div>
        </>
    )
}

export default Outline;