import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService';
import { ROUTE } from '../constant/routes';

const useLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const { username, password } = credentials;

        try {
            const response = await loginAPICall(username, password);
            console.log(response.data);

            const token = 'Bearer ' + response.data.accessToken;
            const role = response.data.role;

            storeToken(token);
            saveLoggedInUser(username, role);
            navigate(ROUTE.TODO);
            window.location.reload(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        credentials,
        handleChange,
        handleLoginForm,
    };
};

export default useLogin;
