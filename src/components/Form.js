import React from "react";
const Form=({list, setList, text, setText,id, hidden, search, setSearch}) => {
   
    const handleChange=(e) => {
        setText(e.target.value)
    }
    const handleSubmit=(e) => {
        e.preventDefault()
        
        const newList=[...list, {text:text, completed:false, id:id}]
        setList(newList)
        setText('')
    }
    return(
        <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
            {hidden && (
                <input autoFocus
                    className="form-control add-todo"
                    type="text"
                    placeholder="Add New"
                    onChange={handleChange}
                    value={text}
                />)}
            </div>
        </form>
    )
}
export default Form