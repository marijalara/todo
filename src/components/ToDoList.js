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
                            checked={isChecked} 
                            value={item} 
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        {item.text}
                    </label>
                </div>
            </li>
        ))}
        </ul>
    
    )
}
export default ToDoList