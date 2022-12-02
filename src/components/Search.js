import React from "react";

const Search=({query, setQuery}) => {

    const searchHandlerChange=(e) => {
        setQuery(e.target.value)
    }

    return(
        <input autoFocus
            autoComplete="off"
            className="form-control search"
            type="text"
            name="search"
            id="search"
            defaultValue={query}
            placeholder="Search"
            onChange={() => searchHandlerChange}
        />
    )
}

export default Search