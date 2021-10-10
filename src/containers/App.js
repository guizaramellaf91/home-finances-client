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

    const actionLoginDataGoogle = async (u) => {
        let user = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }
        setUser(user);
    }

    const actionLoginUser = async (u) => {
        console.log(u);
        let user = {
            id: u._id,
            name: u.name,
            email: u.email,
            login: u.login,
            password: u.password,
            status: u.status,
            registered: u.registered,
            avatar: emptyimg
        }
        setUser(user);
    }

    if (!user) {
        return (
            <Login onReceiveGoogle={actionLoginDataGoogle} onReceiveUser={actionLoginUser} />
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