import { getTodo, saveTodo, updateTodo } from '../services/TodoService';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '../constant/routes';

const useTodo = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateTodo = (title, description, completed) => {
        const todo = { title, description, completed };

        if (id) {
            updateTodo(id, todo)
                .then(() => navigate(ROUTE.TODO))
                .catch((error) => console.error(error));
        } else {
            saveTodo(todo)
                .then(() => navigate(ROUTE.TODO))
                .catch((error) => console.error(error));
        }
    };

    const fetchTodo = (setTitle, setDescription, setCompleted) => {
        if (id) {
            getTodo(id)
                .then((response) => {
                    setTitle(response.data.title);
                    setDescription(response.data.description);
                    setCompleted(response.data.completed);
                })
                .catch((error) => console.error(error));
        }
    };

    return { saveOrUpdateTodo, fetchTodo };
};

export default useTodo;
