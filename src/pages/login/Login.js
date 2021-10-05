import React from 'react';
import Keys from '../../components/Keys';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import api from '../../services/api';
import { history } from '../../history';
import './Login.css';

const Login = () => {

    const handleSubmit = values => {
        api.post('user/auth/', values).then(resp => {
            const { data } = resp;
            if (data) {
                localStorage.setItem(Keys.jsonkey, data.token);
                localStorage.setItem('name-user', data.username);
                history.push('/');
            }
        }).catch(function(e){
            console.log(e);
            alert('Não foi possível conectar, login ou senha incorretos.');
            document.getElementById('password').value = '';
        });
    };
    return (
        <>
            <h1>Home Finances | Login</h1>
            <p>Digite usuário e senha para prosseguir</p>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="login"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="loginerror"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            value={this}
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="senhaerror"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Entrar</button>
                    <Link to='/register'><button className="Login-Btn">Cadastrar</button></Link>
                </Form>
            </Formik>
        </>
    );
};

export default Login;