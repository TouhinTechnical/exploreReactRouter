import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    // const params = useParams();
    const {friendId} = useParams();
    // dynamic data load
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
        // .then(data => console.log(data))
    }, [friendId])
    return (
        <div>
            <h2>This is detalis of Bondu: {friendId}</h2>
            <h3>Name : {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>website: {friend.website}</h6>
            <p><small>City: {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetails;