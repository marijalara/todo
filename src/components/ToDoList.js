import React from "react";
const ToDoList=({list}) => {
    return (
        <ul className="ui list" >
        {list.map((item, index)=> (
            <li className="item ui-state-default pending" key={index}>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked="" value="on"/>
                        {item.text}
                    </label>
                </div>
            </li>
        ))}
        </ul>
    
    )
}
export default ToDoList