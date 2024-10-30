import React, { useState } from 'react'

function ToDoApp(props) {

const [inputText, setInputText] = useState('');
const handlePress = (e) => {
    if (e.key === 'Enter') {
        props.addToDoList(inputText);
        setInputText('');
    }
}

  return (
    <div>
        <h1 className="text-center mb-5">Todo App</h1>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Add a new todo"
                onKeyDown={handlePress}
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value)
                }}
            />
            <button 
                className="btn btn-primary"
                onClick={()=>{
                    props.addToDoList(inputText);
                    setInputText('');
                }}
            >
            Add
            </button>
        </div>
    </div>
  )
}

export default ToDoApp
