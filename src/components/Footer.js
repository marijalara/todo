import React from "react";



const Footer=({hidden, setHidden, setSearch}) => {
    const handleClick=() => {
        setSearch()
    }
    
    return(
        <footer className="clearfix">
        <div className="pull-left buttons">
            <button title="Add New"onClick={()=> setHidden(!hidden)} className="button add selected">
                <i className="add icon"></i>
            </button>
            <button title="Search" onClick={handleClick} className="button search">
                
                <i className="search icon"></i>
            </button>
            
            </div>
            <div className="pull-left">3 items left</div>
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