import React, { useState } from "react";

const Search=() => {
    const [search, setSearch]=useState('')

    const searchHandlerChange=(e) => {
        setSearch(e.target.value)
    }

    return(
        <input autoFocus
            autoComplete="off"
            id="search"
            className="form-control search"
            type="text"
            value={search}
            placeholder="Search"
            onChange={() => searchHandlerChange}
        />
    )
}

export default Search