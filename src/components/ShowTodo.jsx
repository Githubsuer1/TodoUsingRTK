import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { todoCompleted, editTodo, removeTodo} from '../Store/todoSlice'

export default function Show({ todo }){
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const [isTodoEditable,setTodoEditable] = useState(false)
    


    const edit = ()=>{
        dispatch(editTodo(todo.id,todoMsg))
        setTodoEditable((prev)=>!prev)
    }

    const todoCompleteMsg = ()=>{
        if(!isTodoEditable){
            dispatch(todoCompleted(todo.id))
        }
    }

    return (
        <div className={`p-2 shadow-2xl bg-white/40 rounded flex justify-between gap-1
        ${todo.completed ? "bg-red-500" : ""}`} >

            <div className='flex w-full max-w-[85%]'>
                <input 
                    type="checkbox" 
                    className='p-1 border-3'
                    checked={todo.completed}
                    onChange={todoCompleteMsg}
                /> 
                <input 
                    type="text"
                    value={todoMsg}
                    className={`p-1 sm:p-1.5 rounded w-full outline-none cursor-pointer
                    ${isTodoEditable ? "bg-white outline-1" : "bg-transparent"}
                    ${todo.completed ? "line-through" : "" }`}
                    readOnly={!isTodoEditable}
                    onChange={(event)=>setTodoMsg(event.target.value)}
                />
            </div>
            
            <div className='flex gap-1.5'>
                <button 
                    type='button'
                    className={`bg-yellow-200 rounded px-1.5 hover:bg-yellow-400`}
                    onClick={()=>{
                        if (todo.completed) return
                        if (isTodoEditable){
                            edit()   
                        }
                        else{
                            setTodoEditable((prev)=>!prev)
                        }
                    }}
                    disabled={todo.completed}
                >
                {isTodoEditable ? 'Save' : 'Edit'}
                </button>

                <button 
                    type='button'
                    className='bg-red-400 rounded px-1.5 hover:bg-red-500 '
                    onClick={()=>dispatch(removeTodo(todo.id))}
                >
                Delete
                </button>
            </div>
            
        </div>
    )
}