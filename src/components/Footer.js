import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa"; 
import { HashLink as Link } from "react-router-hash-link";



const Footer=({hidden, setHidden, setSearch}) => {
    const handleClick=() => {
        setSearch()
    }
    
    return(
        <footer className="clearfix">
        <div className="pull-left buttons">
            <div title="Add New"onClick={()=> setHidden(!hidden)} className="button add selected">
                <FaPlus className="add"/>
            </div>
            <div title="Search" onClick={handleClick} className="button search">
                <Link to="#search" >
                <FaSistrix className="search" aria-placeholder="Search"/>
                </Link>
            </div>
            </div>
            <div className="pull-left" >3 items left</div>
            <div className="pull-right">
                <ul className="filters list-unstyled clearfix">
                    <li>
                        <a className="selected">All</a>
                    </li>
                    <li>
                        <a className="selected">Active</a>
                    </li>
                    <li>
                        <a className="selected">Completed</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer