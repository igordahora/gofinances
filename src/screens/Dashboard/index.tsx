import React from 'react';

import { Feather } from '@expo/vector-icons'

import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard(){
    return (
        <Container>
            <Header>

                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/4870136?v=4'}} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Igor</UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
                <Feather name="power"/>
            </Header>

            <HighlightCard></HighlightCard>
        </Container>
    )
}