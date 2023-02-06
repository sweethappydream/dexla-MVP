import React, {useState} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SubBar from "../Sidebar/SubBar";

const Outline = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Header/>
            <div className="flex">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                <SubBar isOpen={isOpen} setIsOpen={setIsOpen}/>
                {children}
            </div>
        </>
    )
}

export default Outline;