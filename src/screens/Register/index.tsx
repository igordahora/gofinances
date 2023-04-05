import React from 'react';

import { 
    Container,
    Fields,
    Form,
    Header,
    Title 
} from './styles';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

export function Register(){
    return (
        <Container>
            <Header>
                <Title>registro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder='Nome' 
                    />
                    <Input
                        placeholder='Preço' 
                    />
                </Fields>
                <Button title='Enviar'/>
            </Form>
        </Container>
    )
}
