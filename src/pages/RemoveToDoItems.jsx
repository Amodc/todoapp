import React from 'react'

function RemoveToDoItems(props) {
  return (
    <ul className='list-group'>
      <li className='list-group-item d-flex justify-content-between mb-3 align-items-center'>
        <span>{props.item}</span>
        <button 
            className="btn btn-danger btn-sm ms-auto"
            onClick={e=>{props.deleteItem(props.index)}}
        >Remove</button>
      </li>
    </ul>
  )
}

export default RemoveToDoItems
