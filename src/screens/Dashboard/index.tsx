import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    HighlightCards,
    Icon,
    Transactions,
    Title
} from './styles';



export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/4870136?v=4' }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Igor</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada dia 13 de abril' type="up"></HighlightCard>
                <HighlightCard title='Saídas' amount='R$ 1.259,00' lastTransaction='Última saída dia 03 de abril' type="down"></HighlightCard>
                <HighlightCard title='Total' amount='R$ 16.141,00' lastTransaction='01 à 16 de abril' type="total"></HighlightCard>
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard />
            </Transactions>
        </Container>
    )
}