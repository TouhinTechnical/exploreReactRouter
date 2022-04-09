import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, username, email} = props.friend;

    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <button onClick={showFriendDetails}>{username} : {id}</button>

        </div>
    );
};

export default Friend;