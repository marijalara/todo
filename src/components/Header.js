import React from "react";


const Header=() => {
    let text='Things to do'
    return(
        <div className="header">
            <h1>{text.toUpperCase()}</h1>
        </div>
    )
}

export default Header