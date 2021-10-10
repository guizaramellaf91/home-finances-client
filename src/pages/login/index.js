import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import api from '../../services/api';
import apiFirebase from '../../services/api-firebase';
import './styled.js';
import { AreaLogin } from './styled';
import { BtbDefaultIcons, BtnDefault } from '../../components/main/styled';
import { ArrowBackIos, Facebook, Email } from '@material-ui/icons';

export default ({onReceiveGoogle, onReceiveUser}) => {

    const actionLoginGoogle = async () => {
        let result = await apiFirebase.googleLogar();
        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
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
            }).catch(function (e) {});
        }).catch(function (e) {
            console.log(e);
            alert('Não foi possível conectar, login ou senha incorretos.');
            document.getElementById('password').value = '';
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Log in to your account</h1>
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
                            <BtnDefault type="submit">Enter</BtnDefault>
                            <div className="footerLogin">
                                Don't have an account?
                                <Link to="/register">Sign In</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="/register">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIos /></Link>
                            Crie sua conta</h1>
                        <p>Crie sua conta, é grátis!</p>
                        <form>
                            <div className="form--input">
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>
                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                            <BtnDefault>Crie sua conta agora!</BtnDefault>
                            <div className="footerLogin">
                                Já tem uma conta?
                                <Link to="/">Faça login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};