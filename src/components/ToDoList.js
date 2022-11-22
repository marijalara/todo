import React from "react";
const ToDoList=({list, isChecked, setIsChecked}) => {
    
    return (
        <ul className="ui list" >
        {list.map((item, index)=> (
            <li className="item ui-state-default pending" key={index}>
                <div className="checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            defaultChecked={isChecked}
                            value={item} 
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <span className="completed" style={{textDecoration: isChecked ? 'line-through' : 'none'}}>{item.text}</span>
                    </label>
                </div>
            </li>
        ))}
        </ul>
    
    )
}
export default ToDoList