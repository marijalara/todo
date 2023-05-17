import React from 'react';
import FormProps from './App';
import { Initial } from './App';

interface FormProps {
    list: Initial[]
    setList: React.Dispatch<React.SetStateAction<Initial[]>>
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    hidden: boolean
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
  }
const Form: React.FC<FormProps>= ({list, setList, text, setText, hidden, count, setCount}) => {
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>) : void => {
    setText(e.target.value)
  }
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const newList=[...list, {text:text, completed:false, id: list.length +1}]
    setList(newList)
    setText('')
  }
  const Counter=() => {
    setCount(count + 1)
  }
  return (
    <form onSubmit={handleSubmit} onSubmitCapture={Counter} className="ui form">
      <div className='field'>
        {hidden && (
        <input 
            autoFocus
            autoComplete='off'
            className='form-control add-todo'
            type='text'
            name='add'
            placeholder='Add New'
            onChange={handleChange}
            value={text}
        />
        )}
      </div>
    </form>
  )
}
export default Form