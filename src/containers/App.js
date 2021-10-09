import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Routes from '../components/Routes';
import Login from '../pages/login';
import './App.css';

function App() {

    const [user, setUser] = useState(null);

    const actionLoginDataGoogle = async (u) => {
        let newUser = {
          id: u.uid,
          name: u.displayName,
          avatar: u.photoURL
        }
        setUser(newUser);
        console.log(user);
      }

    if(user === null){
        return (
            <Login onReceiveGoogle={actionLoginDataGoogle} />
        );
    }

    return (
        <>
            <BrowserRouter>
                <Header user={user} />
                <Routes />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;