import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import ToDoList from './ToDoList';
import Footer from './Footer';

export interface Initial {
  text: string
  id: number
  completed: boolean
}
const App: React.FC = () => {
  const initialCounterValue: number=3
    let initialDetails: Initial[]=[
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
   
  const [list, setList]=useState<Initial[]>(initialDetails)
  const [text, setText]=useState<string>('')
  const [hidden, setHidden]=useState<boolean>(true)
  const [count, setCount]=useState<number>(initialCounterValue)
  const [isChecked, setIsChecked]=useState<Initial[]>([])
  const [status, setStatus]=useState<string>("all")
  const [filtered, setFiltered]=useState<Initial[]>([])
  
  return (
    <BrowserRouter>
    <div>
      <div className='ui container'>
        <div className='row'>
          <div className='todolist'>
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