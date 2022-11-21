import React from "react";
const Form=({list, setList, text, setText,id, hidden, count, setCount}) => {
   
    const handleChange=(e) => {
        setText(e.target.value)
    }
    const handleSubmit=(e) => {
        e.preventDefault()
        
        const newList=[...list, {text:text, completed:false, id:id}]
        setList(newList)
        setText('')
    }
    
    const Counter=() => {
        setCount(count + 1)
    }
   
    return(
        <form onSubmit={handleSubmit} onSubmitCapture={Counter} className="ui form">
        <div className="field">
            {hidden && (
                <input autoFocus
                    autoComplete="off"
                    id="search"
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