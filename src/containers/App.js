import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Routes from '../components/Routes';
import Login from '../pages/login';
import { emptyimg } from '../components/Keys';
import './App.css';

function App() {

    const [user, setUser] = useState(null);

    const actionLoginGoogle = async (u) => {
        var loginUser = u.email.split('@');
        let user = {
            id: u.uid,
            name: u.displayName,
            email: u.email,
            login: loginUser[0],
            password: loginUser[0],
            status: true,
            avatar: u.photoURL
        }
        setUser(user);
    }

    const actionLoginUser = async (u) => {
        let user = {
            id: u._id,
            name: u.name,
            email: u.email,
            login: u.login,
            password: u.password,
            status: u.status,
            registered: u.registered,
            avatar: u.avatar
        }
        setUser(user);
    }

    const actionCreateUser = async (u) => {
        let user = {
            id: u._id,
            name: u.name,
            email: u.email,
            login: u.login,
            password: u.password,
            status: u.status,
            registered: u.registered,
            avatar: u.avatar
        }
        setUser(user);
    }

    if (!user) {
        return (
            <Login onReceiveGoogle={actionLoginGoogle}
                onReceiveUser={actionLoginUser}
                onCreateUser={actionCreateUser} />
        );
    }

    return (
        <BrowserRouter>
            <Header user={user} />
            <Routes user={user} />
            <Footer />
        </BrowserRouter>
    )
}

export default App;