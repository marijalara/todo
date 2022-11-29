import React, {useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa"; 
import { HashLink as Link } from "react-router-hash-link";
import Search from "./Search";



const Footer=({hidden, setHidden, setSearch, setStatus, status, list, setFiltered, count}) => {
    const handleClick=() => {
        setSearch()
    }
    
    const statusOnChange=(e) => {
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

    const filterOnClick=() => {
        filtersHandler()
    }
    
    
    return(
        <footer className="clearfix">
        <div className="pull-left buttons">
            <div title="Add New"onClick={()=> setHidden(!hidden)} className="button add selected">
                <FaPlus className="add"/>
            </div>
            <div title="Search" onClick={handleClick} className="button search">
                <Link to="/#search" >
                <FaSistrix 
                    className="search" 
                />
                </Link>
            </div>
            </div>
            <div className="pull-left">{count} items left</div>
            <div className="pull-right">
                <ul name="keys" className="filters list-unstyled clearfix">
                    <li onChange={statusOnChange}>
                        <div onClick={filterOnClick} key="all" className="selected">All</div>
                    </li>
                    <li>
                        <div onClick={filterOnClick} key="active" className="selected">Active</div>
                    </li>
                    <li>
                        <div onClick={filterOnClick} key="completed" className="selected">Completed</div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer