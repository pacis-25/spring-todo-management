import React from 'react';
import useRegister from '../hooks/useRegister';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const RegisterComponent = () => {
    const {
        formValues,
        handleInputChange,
        handleRegistrationForm
    } = useRegister();

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> User Registration Form </h2>
                        </div>
                        <div className='card-body'>
                            <RegistrationForm
                                formValues={formValues}
                                handleInputChange={handleInputChange}
                                handleRegistrationForm={handleRegistrationForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;
