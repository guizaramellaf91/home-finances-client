import React from 'react';
import { ContainerPage, TitlePage } from '../../components/main/Main';

const Page = (user) => {
    return (
        <ContainerPage>
            <TitlePage>
                Welcome {user.user.name}!
            </TitlePage>
        </ContainerPage>
    );
};

export default Page;