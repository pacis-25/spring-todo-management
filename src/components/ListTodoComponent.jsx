import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../hooks/useCheckedAdminUser';
import useListTodos from '../hooks/useListTodos';
import { ROUTE } from '../constant/routes';

const ListTodoComponent = () => {
    const { todos, removeTodo, markCompleteTodo, markInCompleteTodo } = useListTodos();
    const navigate = useNavigate();
    const isAdmin = isAdminUser();

    const addNewTodo = () => {
        navigate(ROUTE.ADD_NEW_TODO);
    };

    const updateTodo = (id) => {
        console.log(id);
        navigate(`/update-todo/${id}`);
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Todos</h2>
            {isAdmin && (
                <button className="btn btn-primary mb-2" onClick={addNewTodo}>
                    Add Todo
                </button>
            )}

            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES' : 'NO'}</td>
                                <td>
                                    {isAdmin && (
                                        <button className="btn btn-info" onClick={() => updateTodo(todo.id)}>
                                            Update
                                        </button>
                                    )}

                                    {isAdmin && (
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeTodo(todo.id)}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Delete
                                        </button>
                                    )}

                                    <button
                                        className="btn btn-success"
                                        onClick={() => markCompleteTodo(todo.id)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Complete
                                    </button>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => markInCompleteTodo(todo.id)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        In Complete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTodoComponent;
