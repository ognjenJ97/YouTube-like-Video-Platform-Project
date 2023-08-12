import React, { useEffect, useState } from 'react';
import styles from './EditChannel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser, fetchUser, fetchUserLogIn } from '../../store/usersSlice';

const EditChannel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = window.localStorage.getItem("userId");
    console.log("USER ID : " + userId
    )
    useEffect(() => {
        console.log("RADIMO FETCH")
        dispatch(fetchUserLogIn(userId));
    }, [dispatch, userId]);

    
    const user = useSelector((state) => state.users.singleUserLogIn);
    console.log("KOMPLETAN USER:")
    console.log(user)

    const [updatedUser, setUpdatedUser] = useState({
        id: -1,
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        channelDescription: '',
        registrationDate: '',
        picture: '',
        role: '',
        blocked: '',
        subscribers: [],
        subscriptions: [],
        videos: []
    });

    useEffect(() => {
        if (user) {
            setUpdatedUser({
                id: user.id,
                username: user.username,
                password: user.password,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                channelDescription: user.channelDescription || '',
                registrationDate: user.registrationDate,
                picture: user.picture,
                role: user.role,
                blocked: user.blocked,
                subscribers: user.subscribers,
                subscriptions: user.subscriptions,
                videos: user.videos
            });
        }
    }, [user]);

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setUpdatedUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const editHandler = () => {
        if (
            updatedUser.firstName.trim() === '' ||
            updatedUser.lastName.trim() === '' ||
            updatedUser.email.trim() === ''
        ) {
            alert('Enter all fields');
            return;
        }
        dispatch(editUser(updatedUser))
        dispatch(fetchUserLogIn(userId));
        dispatch(fetchUser(userId))
        navigate('/channel/' + updatedUser.id);
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.editOwner}>
            <div className={styles.editOwner2}>
            <div className={styles.editOwnerSingle}>
                <label>First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updatedUser.firstName || ''}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className={styles.editOwnerSingle}>
                <label>Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updatedUser.lastName || ''}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className={styles.editOwnerSingle}>
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={updatedUser.email || ''}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className={styles.editOwnerSingle}>
                <label>Channel Description</label>
                <textarea
                    id="channelDescription"
                    name="channelDescription"
                    value={updatedUser.channelDescription || ''}
                    onChange={(e) => onInputChange(e)}
                />
            </div>


            <div className={styles.saveButton} onClick={() => editHandler()}>
                Save changes
            </div>
            </div>
        </div>
    );
};

export default EditChannel;
