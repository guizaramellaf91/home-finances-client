import React, { useState } from "react";
import userService from '../../services/user-service';
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { BtnDefault } from '../main/styled';
import { AreaModal } from './styled';

const StyledModal = Modal.styled`
  width: 80rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.5s ease-in-out;`;

function FancyModalButton(u) {
    const [user] = useState(u.user);
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    function invokeRegisterUser(e) {
        userService.registerExistingUser(user);
        toggleModal(e);
    }

    return (
        <AreaModal>
            <div>
                <StyledModal
                    isOpen={isOpen}
                    afterOpen={afterOpen}
                    beforeClose={beforeClose}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                    opacity={opacity}
                    backgroundProps={{ opacity }}>
                    <p>Ao realizar o cadastro, seus dados do e-mail vão ser copiados para nosso banco de dados,
                        exceto a senha. Após finalizar a criação do usuário, altere sua senha que atualmente é igual ao seu login: <b>{user.login}</b>.</p>
                    <BtnDefault onClick={invokeRegisterUser}>Confirmar</BtnDefault >
                    <BtnDefault onClick={toggleModal}>Cancelar</BtnDefault>
                </StyledModal>
            </div>
            <BtnDefault onClick={toggleModal}>CLIQUE AQUI PARA SE CADASTRAR</BtnDefault>
        </AreaModal>
    );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.5s ease-in-out;
`;

export default function App(u) {
    return (
        <AreaModal>
            <ModalProvider backgroundComponent={FadingBackground}>
                <div className="App">
                    <FancyModalButton user={u.user} />
                </div>
            </ModalProvider>
        </AreaModal>
    );
}