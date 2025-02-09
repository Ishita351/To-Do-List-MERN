import React , {UseState} from 'react'
import Create from './Create'
import axios from 'axios'
import './App.css'
import {  BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = React.useState([])
    React.useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(res => {
            setTodos(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    } , [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
        .then(res => {
            location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="home">
      <h1>TO DO LIST</h1>
      <Create />
      {
        todos.length === 0
        ?
        <div><h2>NO RECORD</h2></div>
        :
        todos.map((todo , index) => (
            <div className="task" >
                <p>{todo.task}</p>
                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>    
            </div>
        ))
      }
    </div>
  )
}

export default Home
