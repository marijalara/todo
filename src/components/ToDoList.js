import React from "react";

const ToDoList=({list, setIsChecked, filtered}) => {
    const handleChange=(completed, i) => {
        let tmp=list[i]
        tmp.completed=!completed
        let listClone=[...list]
        listClone[i]=tmp
        setIsChecked([...listClone])
    }
   
    return (
        <ul className="ui list" >
        {filtered.map(({text, completed}, i) => (
            <li className="item ui-state-default pending" key={i}>
                <div className="checkbox">
                    <label htmlFor={i}>
                        <input 
                            type="checkbox"                    
                            checked={completed}
                            value={text.value} 
                            onChange={() => handleChange(completed,i)}
                            id={i}
                        />
                        <span style={{textDecoration: completed ? "line-through" : ""}} className="completed">{text}</span>
                    </label>
                </div>
            </li>
        ))}
        </ul>
    )
}
export default ToDoList