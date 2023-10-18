import React, { useState } from 'react'
import AppAxios from '../../apis/AppAxios';
import styles from './PasswordChange.module.css';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const navigate = useNavigate();

    const userId = window.localStorage.getItem("userId");
    const [formData, setFormData] = useState({
        username: '',
        oldPassword: '',
        password: '',
        repeatedPassword: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const goToPlay = () => {
        navigate('/channel/' + userId)
      }

      const handleSubmit = async (event) => {
        event.preventDefault();

        if(
            formData.password === '' ||
            formData.repeatedPassword === ''
        ) {
            alert("You must enter all the fields")
            return;
        }
    
        if (formData.password !== formData.repeatedPassword) {
          alert('Passwords do not match.');
          return;
        }
    
        try {
          const response = await AppAxios.put(`/users/${userId}?promenaLozinke`, formData);
          if (response.status === 200) {
            alert('Password changed successfully.');
            goToPlay();
          } else {
            alert('Unauthorized. Please check your old password.');
          }
        } catch (error) {
          console.error('Error changing password:', error);
          alert('An error occurred while changing password.');
        }
      };
    
      return (
        <div className={styles.changePasswordContainer}>
        <form className={styles.changePasswordForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="oldPassword"
            placeholder="Old Password"
            value={formData.oldPassword}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="repeatedPassword"
            placeholder="Repeat New Password"
            value={formData.repeatedPassword}
            onChange={handleChange}
          />
          <button type="submit" className={styles.button}>Change Password</button>
        </form>
        </div>
      );
    };

export default ChangePassword