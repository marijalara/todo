import React from "react";

const Search=({query, setQuery,forwardedRef,filtered, list, data}) => {
    
    const handleChange=() => {
        setQuery()
    }
    
    return(
        <div className="ui form">
            <input 
                ref={forwardedRef}
                autoComplete="off"
                className="form-control search"
                type="text"
                name="search"
                id="search"
                value={query}
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
    )
}

export default Search