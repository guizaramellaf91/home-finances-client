import React from 'react';
import { ContainerPage, TitlePage } from '../../components/main/Main';

const Page = (user) => {
    return (
        <ContainerPage>
            <TitlePage>
                Welcome <b>{user.user.name}</b>!
            </TitlePage>
        </ContainerPage>
    );
};

export default Page;