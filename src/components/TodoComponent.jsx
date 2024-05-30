import React, { useEffect } from 'react';
import useTodoForm from '../hooks/useTodoForm';
import useTodo from '../hooks/useTodo';

const TodoComponent = () => {
    const { title, setTitle, description, setDescription, completed, setCompleted } = useTodoForm();
    const { saveOrUpdateTodo, fetchTodo } = useTodo();

    useEffect(() => {
        fetchTodo(setTitle, setDescription, setCompleted);
    }, [fetchTodo, setTitle, setDescription, setCompleted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveOrUpdateTodo(title, description, completed);
    };

    const pageTitle = () => {
        return id ? <h2 className='text-center'>Update Todo</h2> : <h2 className='text-center'>Add Todo</h2>;
    };

    return (
        <div className='container'>
            <br />
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Todo Title:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Todo Title'
                                    name='title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Todo Description:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter Todo Description'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Todo Completed:</label>
                                <select
                                    className='form-control'
                                    value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}
                                >
                                    <option value='false'>No</option>
                                    <option value='true'>Yes</option>
                                </select>
                            </div>

                            <button className='btn btn-success' onClick={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoComponent;
