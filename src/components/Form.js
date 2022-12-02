import React from "react";

const Form=({list, setList, text, setText, hidden, count, setCount}) => {
   
    const handleChange=(e) => {
        setText(e.target.value)
    }
    const handleSubmit=(e) => {
        e.preventDefault()
        
        const newList=[...list, {text:text, completed:false, id: list.length +1}]
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
                    className="form-control add-todo"
                    type="text"
                    name="add"
                    placeholder="Add New"
                    onChange={handleChange}
                    value={text}
                />)}
            </div>
        </form>
    )
}
export default Form