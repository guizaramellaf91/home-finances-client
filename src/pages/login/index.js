import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import api from '../../services/api';
import fireBaseService from '../../services/firebase-service';
import './styled.js';
import { AreaLogin } from './styled';
import { BtbDefaultIcons, BtnDefault } from '../../components/main/styled';
import { ArrowBackIos, Facebook, Email } from '@material-ui/icons';

const Login = ({ onReceiveGoogle, onReceiveUser, onCreateUser }) => {

    const actionLoginGoogle = async () => {
        let result = await fireBaseService.googleLogar();
        if (result) {
            onReceiveGoogle(result.user);
        }
    }

    const actionLoginUser = async (event) => {
        event.preventDefault();
        api.post('user/auth/', {
            login: event.target.elements.login.value,
            password: event.target.elements.password.value
        }).then(resp => {
            const { data } = resp;
            api.get(`/user/${data.userid}`).then(resp => {
                if (resp) {
                    const user = JSON.parse(JSON.stringify(resp.data));
                    onReceiveUser(user);
                }
            }).catch(function (e) { });
        }).catch(function (e) {
            console.log(e);
            alert('Não foi possível conectar, login ou senha incorretos.');
            document.getElementById('password').value = '';
        });
    }

    const actionCreateUser = async (event) => {
        event.preventDefault();
        api.post('user/', {
            name: event.target.elements.name.value,
            login: event.target.elements.login.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        }).then(resp => {
            const { data } = resp;
            onCreateUser(data);
        }).catch(function (e) {
            console.log(e);
            alert('Não foi possível criar o usuário, tente novamente mais tarde.');
            document.getElementById('password').value = '';
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIos /></Link>
                            Create your account</h1>
                        <p>It's completely free!</p>
                        <form onSubmit={actionCreateUser}>
                            <div className="form--input">
                                <label>Name</label>
                                <input type="text" placeholder="type your name" name="name" />
                            </div>
                            <div className="form--input">
                                <label>Login</label>
                                <input type="text" placeholder="type your login" name="login" />
                            </div>
                            <div className="form--input">
                                <label>Email</label>
                                <input type="email" placeholder="type your email" name="email" />
                            </div>
                            <div className="form--input">
                                <label>Password</label>
                                <input type="password" placeholder="type your password" name="password" />
                            </div>
                            <BtnDefault type="submit">CREATE NOW!</BtnDefault>
                            <div className="footerLogin">
                                You already have an account?
                                <Link to="/">Login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>HOME FINANCES</h1>
                        <BtbDefaultIcons>
                            <Facebook />
                            <div className="center">Login with Facebook</div>
                        </BtbDefaultIcons>
                        <BtbDefaultIcons onClick={actionLoginGoogle}>
                            <Email />
                            <div className="center">Login with Gmail</div>
                        </BtbDefaultIcons>
                        <p>OR</p>
                        <form onSubmit={actionLoginUser}>
                            <div className="form--input">
                                <label>Login</label>
                                <input type="login" id="login" name="login" value={this} />
                            </div>
                            <div className="form--input">
                                <label>Password</label>
                                <input type="password" id="password" name="password" value={this} />
                            </div>
                            <BtnDefault type="submit">ENTER</BtnDefault>
                            <div className="footerLogin">
                                Don't have an account?
                                <Link to="/register">Sign In</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Login;