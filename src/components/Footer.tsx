import React, {useEffect} from 'react';
import { FaPlus } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa"; 
import { Initial } from './App';

type FooterProps= {
    hidden: boolean;
    setHidden:  React.Dispatch<React.SetStateAction<boolean>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    status: string;
    list: Initial[];
    setFiltered: React.Dispatch<React.SetStateAction<Initial[]>>;
    count: number
}
const Footer: React.FC<FooterProps> = ({hidden, setHidden, setStatus, status, list, setFiltered, count}) => {
    const statusHandler: React.MouseEventHandler<HTMLButtonElement>=(e)=> {
        setStatus(e.currentTarget.value)
    }
    const filtersHandler=() => {
        switch(status) {
            case "completed": 
                setFiltered(list.filter(text =>text.completed===true))
                break
            case "active":
                setFiltered(list.filter(text =>text.completed===false))
                break
            default:
                setFiltered(list)
                break
        }
    }

    useEffect(() => {
        filtersHandler()
    },[list, status])

    return (
        <footer className='clearfix'>
            <div className='pull-left buttons'>
                <div title='Add New' onClick={() => setHidden(!hidden)} className='button add selected'>
                    <FaPlus className='add' />
                </div>
                <div title='Search' className='button search'>
                    <FaSistrix className='search' />
                </div>
            </div>
            <div className='pull-left'>{count} items left</div>
            <div className='pull-right'>
                <ul className='filters list-unstyled clearfix'>
                    <li>
                        <button value="all" onClick={statusHandler} className={status==='all' ? 'selected' : ''}>All</button>
                        <button value="active" onClick={statusHandler} className={status === 'active' ? 'selected' : ''}>Active</button>
                        <button value="completed" onClick={statusHandler} className={status === 'completed' ? 'selected' : ''}>Completed</button>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer