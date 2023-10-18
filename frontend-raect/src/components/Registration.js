import React, { useState } from 'react'
import styles from './Registration.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/usersSlice';

const Registration = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [userData, setUserData] = useState({
        username: '',
        password: '',
        repeatedPassword: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const addUserHandler = async () => {
        if (
          userData.username.trim() === '' ||
          userData.password.trim() === '' ||
          userData.repeatedPassword.trim() === '' ||
          userData.firstName.trim() === '' ||
          userData.lastName.trim() === '' ||
          userData.email.trim() === ''
        ) {
          alert('Please fill in all fields.');
          return;
        }

        if(
            userData.password !== userData.repeatedPassword
        ) {
            alert("Passwords must be the same!")
            return;
        }

        if (userData.firstName.length() > 40) {
            alert("firstName is too long")
        }

        if (userData.lastName.length() > 40) {
            alert("lastName is too long")
        }

        if (userData.username.length() > 40) {
            alert("Username is too long")
        }

        if (userData.email.length() > 80) {
            alert("email is too long")
        }

    
        try {
          const result = await dispatch(addUser(userData));
    
          if (addUser.fulfilled.match(result)) {
            navigate('/login');
          }
        } catch (error) {
          alert('Error occurred during registration: ' + error.message);
          navigate('/registration'); 
        }
      };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.registrationForm}>
                <p>Registration</p>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="password"
                        name="repeatedPassword"
                        placeholder="Repeat Password"
                        value={userData.repeatedPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button className={styles.registerButton} onClick={addUserHandler}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Registration;