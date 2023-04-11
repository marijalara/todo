import React, {useEffect, useState, useRef} from "react";
import { FaPlus } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa"; 

const Footer=({hidden, setHidden, setStatus, status, list, setFiltered, count}) => {
    const [isOpen, setIsOpen]=useState(false)
    const searchInput=useRef(null)
    
    const statusHandler=(e) => {
        setStatus(e.target.value)
    }
    
    const filtersHandler=() => {
        switch(status) {
            case "completed": 
                setFiltered(list.filter(text =>text.completed===true))
                break
            case "active":
                setFiltered(list.filter(text =>text.completed===false))
                break
            default:
                setFiltered(list)
                break
        }
    }
    
    useEffect(() => {
        filtersHandler()
    },[list, status])

    const handleClickRef=() => {
        if(searchInput.current) {
            searchInput.current.focus()
        } 
    }
   
    return(
        <footer className="clearfix">
        <div className="pull-left buttons">
            <div title="Add New"onClick={()=> setHidden(!hidden)} className="button add selected">
                <FaPlus className="add"/>
            </div>
            <div title="Search"  className="button search">
                <FaSistrix className="search" onClick={handleClickRef}/>
                
            </div>
            </div>
            <div className="pull-left">{count} items left</div>
            <div className="pull-right">
                <ul onClick={statusHandler} name="list" className="filters list-unstyled clearfix">
                    <li>
                        <button value="all" className="selected">All</button>
                        <button value="active" className="selected">Active</button>
                        <button value="completed" className="selected">Completed</button>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer