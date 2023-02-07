import React, {useState, useContext, useEffect} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SubBar from "../Sidebar/SubBar";
import { editContext } from "../../context";

const Outline = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const { isEditable } = useContext(editContext);
    
    useEffect(() => {
        if(!isEditable)
            setIsOpen(false);
    },[isEditable])

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