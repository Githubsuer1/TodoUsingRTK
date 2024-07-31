import { useState } from 'react'
import AddTodo from './components/AddTodo'
import {useSelector} from 'react-redux'
import Show from './components/ShowTodo'

function App() {
  const todos = useSelector(state=>state.todos)

  return (
    <div className='w-full h-screen bg-blue-300 flex flex-col items-center p-3 overflow-scroll'>
      <div className='w-full max-w-2xl'>
        <AddTodo />
      </div>

      
        {
          todos.map((todo)=>
            <div className='w-full max-w-3xl flex flex-col gap-2 mt-2' key={todo.id}>
              <Show todo={todo}/>
            </div>
          )    
        }
      

      
    </div>
  )
}

export default App
