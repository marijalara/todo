import React, {useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa"; 
import { HashLink as Link } from "react-router-hash-link";
import Search from "./Search";

const Footer=({hidden, setHidden, query, setQuery, setStatus, status, list, setFiltered, count}) => {
    const handleClick=() => {
        setQuery()
    }
   
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
    
    return(
        <footer className="clearfix">
        <div className="pull-left buttons">
            <div title="Add New"onClick={()=> setHidden(!hidden)} className="button add selected">
                <FaPlus className="add"/>
            </div>
            <div title="Search" onClick={handleClick} className="button search">
                <Link to="/#search" >
                <FaSistrix className="search"/>
                <Search query={query} setQuery={setQuery}/>
                </Link>
            </div>
            </div>
            <div className="pull-left">{count} items left</div>
            <div className="pull-right">
                <ul onClick={statusHandler} name="list" className="filters list-unstyled clearfix">
                    <li>
                        <button  value="all" className="selected">All</button>
                        <button  value="active" className="selected">Active</button>
                        <button  value="completed" className="selected">Completed</button>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer