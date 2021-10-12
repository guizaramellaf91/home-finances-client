import api from '../services/api';
import Login from '../pages/login';

const userService = {
    userExists: (u) => {
        api.get(`users_google/${u.id_google}`).then(resp => {
            const { data } = resp;
            if(data){
               return true;
            }else{
                return false;
            }
        })
    },
    registerExistingUser: (u) => {
        api.post('user/', {
            id_google: u.id_google,
            name: u.name,
            email: u.email,
            login: u.login,
            password: u.password,
            status: u.status,
            avatar: u.avatar
        }).then(resp => {
            const { data } = resp;
            alert(`cadastro realizado com sucesso!`);
            window.location.reload();
            <Login onReceiveUser={data.user} />
        }).catch(function (e) {
            console.log(e);
            alert('Não foi possível criar o usuário, tente novamente mais tarde.');
        });
    }
}

export default userService;