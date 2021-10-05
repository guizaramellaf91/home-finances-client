import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import api from '../../services/api';
import { history } from '../../history';

import '../login/Login.css';

const Register = () => {
    const handleSubmit = values => {
        api.post('user/', values).then(resp => {
            const { data } = resp
            if (data) {
                alert('Cadastrado realizado! Você será redirecionado(a) para tela de login.');
                history.push('/login');
            } 
        }).catch(function(e){
            console.log(e);
            alert('Não foi possível concluir o cadastro, reveja os dados e tente novamente.');
        });
    }

    const validations = yup.object().shape({
        login: yup.string().required(),
        password: yup.string().min(3).required()
    })
    return (
        <>
            <h1>Home Finances | Registre-se</h1>
            <p>Preencha os campos para criar um novo usuário.</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="name"
                            value={this}
                            placeholder="Digite o nome"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="name"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            type="email"
                            value={this}
                            placeholder="Digite o e-mail"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="login"
                            value={this}
                            placeholder="Digite o login"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="login"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password"
                            type="password"
                            value={this}
                            placeholder="Digite a senha"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Confirmar Cadastro</button>
                    <Link to='/'><button className="Login-Btn">Voltar</button></Link>
                </Form>
            </Formik>
        </>
    )
}

export default Register