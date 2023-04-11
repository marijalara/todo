import React from "react";

const SearchList=({query, initialList}) => {
    const filteredData=initialList?.filter((el) => {
        if(query==='') {
            return el
        } else {
            return el.text.toLowerCase().includes(query)
        }
    })
    
    return(
        <ul className="ui list" >
            {filteredData?.map((text) =>(
                <li key={text.id}>{text.text}</li>
            ))}
        </ul>

    )
}

export default SearchList