import React from 'react';

const RegistrationForm = ({
    formValues,
    handleInputChange,
    handleRegistrationForm
}) => {
    return (
        <form>
            <div className='row mb-3'>
                <label className='col-md-3 control-label'> Name </label>
                <div className='col-md-9'>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Enter name'
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row mb-3'>
                <label className='col-md-3 control-label'> Username </label>
                <div className='col-md-9'>
                    <input
                        type='text'
                        name='username'
                        className='form-control'
                        placeholder='Enter username'
                        value={formValues.username}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row mb-3'>
                <label className='col-md-3 control-label'> Email </label>
                <div className='col-md-9'>
                    <input
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Enter email address'
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='row mb-3'>
                <label className='col-md-3 control-label'> Password </label>
                <div className='col-md-9'>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='Enter password'
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className='form-group mb-3'>
                <button className='btn btn-primary' onClick={handleRegistrationForm}>Submit</button>
            </div>
        </form>
    );
};

export default RegistrationForm;
