import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';

function Home(props) {
    return (
        <div>
            <Register />
            <Login />
        </div>
    );
}

export default Home;