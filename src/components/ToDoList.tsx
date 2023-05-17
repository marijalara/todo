import React from 'react';
import { Initial } from './App';

type ToDoListProps= {
    list: Initial[];
    setIsChecked: React.Dispatch<React.SetStateAction<Initial[]>>;
    filtered: Initial[]
}
const ToDoList: React.FC<ToDoListProps> = ({list, setIsChecked, filtered}) => {
    const handleChange=(completed: boolean, i: number): void => {
        let tmp=list[i]
        tmp.completed=!completed
        let listClone=[...list]
        listClone[i]=tmp
        setIsChecked([...listClone])
    }
    return (
        <ul className='ui list'>
            {filtered.map(({text, completed}, i) => (
                <li className='item ui-state-default pending' key={i}>
                <div className='chechbox'>
                    <label>
                        <input 
                            type='checkbox'
                            checked={completed}
                            value={text}
                            onChange={() => handleChange(completed,i)}
                            id={i.toString()}
                        />
                        <span style={{textDecoration: completed ? "line-through" : ""}} className='completed'>{text}</span>
                    </label>
                </div>
            </li>
            ))}
        </ul>
    )
}
export default ToDoList