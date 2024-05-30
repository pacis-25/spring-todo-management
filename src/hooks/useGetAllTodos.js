import { useState, useEffect } from "react"
import { getAllTodos } from "../services/TodoService"
import { useNavigate } from "react-router-dom"
import { ROUTE } from '../constant/routes'

export const useGetAllTodos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        getAllTodos()
        .then((response) => {
            setTodos(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    return todos;

}

export const useAddNewTodo = () => {
    const navigate = useNavigate()
    
    function addNewTodo(){
        navigate(ROUTE.ADD_NEW_TODO)

    }
    return addNewTodo
}