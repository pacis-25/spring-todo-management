// useListTodos.js
import { useEffect, useState } from 'react';
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from '../services/TodoService';

const useListTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        listTodos();
    }, []);

    const listTodos = () => {
        getAllTodos()
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const removeTodo = (id) => {
        deleteTodo(id)
            .then((response) => {
                listTodos();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const markCompleteTodo = (id) => {
        completeTodo(id)
            .then((response) => {
                listTodos();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const markInCompleteTodo = (id) => {
        inCompleteTodo(id)
            .then((response) => {
                listTodos();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { todos, removeTodo, markCompleteTodo, markInCompleteTodo };
};

export default useListTodos;
