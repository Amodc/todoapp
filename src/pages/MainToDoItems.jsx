import React, { useState } from 'react'
import ToDoApp from './ToDoApp'
import RemoveToDoItems from './RemoveToDoItems';

function MainToDoItems() {

const [listToDo, setListToDo] = useState([]);
let addToDoList = (inputText) => {
    if(inputText !== "")
        setListToDo([...listToDo, inputText]);
}

const deleteListItem = (key) => {
    let newListItem = [...listToDo];
    listToDo.splice(key,1)
    setListToDo([...listToDo])
}

  return (
    <div>
      <ToDoApp addToDoList={addToDoList}/>
      <h4 >New Todo List</h4>
      {listToDo.map((item, i)=>{
        return(
            <RemoveToDoItems key={i} index={i} item={item} deleteItem={deleteListItem}/>
        )
      })}
    </div>
  )
}

export default MainToDoItems
