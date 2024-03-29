import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

const App=() => {

    const initialCounterValue=3
    let initialDetails=[
        {
            text: 'Learn Javascript',
            id: 1,
            completed: false
        },
        {
            text: 'Learn React',
            id: 2,
            completed: false
        },
        {
            text: 'Build React App',
            id: 3,
            completed: false
        }
    ]
    
    const [list, setList]=useState(initialDetails)
    const [text, setText]=useState('')
    const [hidden, setHidden]=useState(true)
    const [count, setCount]=useState(initialCounterValue)
    const [isChecked, setIsChecked]=useState(false)
    const [status, setStatus]=useState("all")
    const [filtered, setFiltered]=useState([])
    
    return (
        <BrowserRouter>
        <div>
        <div className="ui container">
            <div className="row">
                <div className="todolist">
            <Header />
            <br />
            <Form 
                list={list}
                setList={setList}
                text={text}
                setText={setText}
                hidden={hidden}
                count={count}
                setCount={setCount}
            />
            <ToDoList 
                list={list}
                setIsChecked={setIsChecked}
                filtered={filtered}
            />
            <Footer 
                hidden={hidden}
                setHidden={setHidden}
                count={count}
                setFiltered={setFiltered}
                list={list}
                setStatus={setStatus}
                status={status}
            />
            </div>
        </div>
        </div>
    </div>
    </BrowserRouter>
    )
}
export default App