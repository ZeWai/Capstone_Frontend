import React from 'react'
import './Todolist.css'

export default function Todolist(props) {
  return (
    <><div>{props.currentview === "Overview" ? `Todolist ${props.currentview}` : `Zone ${props.currentview} Todolist `} </div>
    </>
  )
}
