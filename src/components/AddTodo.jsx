import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../Store/todoSlice'

export default function AddTodo(){
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const [input,setInput] = useState('')
    

    const add = (event)=>{
        event.preventDefault()
        if (!input) return 
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="p-5 sm:p-10 shadow-2xl grid justify-items-center rounded mt-8">
            <form onSubmit={add} className='w-full max-w-xl flex p-2'>
                <input 
                    className='w-[80%] p-1.5 rounded-l outline-none'
                    type="text" 
                    placeholder='Enter todos...'
                    value={input}
                    onChange={(event)=>setInput(event.target.value)}
                />
                <button className=' w-[20%] rounded-r bg-orange-400' type='submit'>Add</button>
            </form>
        </div>
    )
}