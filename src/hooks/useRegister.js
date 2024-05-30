import { useState, useCallback } from 'react';
import { registerAPICall } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }, []);

    const handleRegistrationForm = useCallback((e) => {
        e.preventDefault();

        registerAPICall(formValues)
            .then((response) => {
                console.log(response.data);
                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
            });
    }, [formValues, navigate]);

    return {
        formValues,
        handleInputChange,
        handleRegistrationForm
    };
};

export default useRegister;
