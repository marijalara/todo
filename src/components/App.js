import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

const App=() => {
    const initialList=[
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
    const [list, setList]=useState(initialList)
    const [text, setText]=useState('')
    const [hidden, setHidden]=useState(true)
    const [search, setSearch]=useState(true)
   
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
            />
            <ToDoList 
                list={list}
            />
            <Footer 
                hidden={hidden}
                setHidden={setHidden}
                search={search}
                setSearch={setSearch}
            />
            </div>
        </div>
        </div>
    </div>
    </BrowserRouter>
    )
}
export default App