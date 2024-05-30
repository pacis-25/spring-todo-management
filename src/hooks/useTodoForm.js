import { useState } from 'react';

const useTodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    return { title, setTitle, description, setDescription, completed, setCompleted };
};

export default useTodoForm;
