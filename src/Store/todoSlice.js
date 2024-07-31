import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[
        {
            id:1,
            text:'python Language',
            completed:false
        }
    ]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((item)=> item.id !== action.payload)
        },
        editTodo:(state,action)=>{
            state.todos = state.todos.map((item)=>item.id === action.payload.id ? {...item,text:action.payload} : item)
        },
        todoCompleted:(state,action)=>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload ? {...todo,completed:!todo.completed} : todo)
        }
    }
})

export default todoSlice.reducer
export const {addTodo,removeTodo,editTodo,todoCompleted} = todoSlice.actions