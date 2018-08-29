import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Button, Text } from 'native-base';

export default class Agenda extends Component {
  componentWillMount() {
    console.log('cadastroCliente');
  }
  render() {
    return (

      <Container style={{padding: 10}}>
           <Content>
             <Form >
               <Item floatingLabel last>
                 <Label>Nome Completo</Label>
                 <Input />
               </Item>
               <Item floatingLabel last>
                 <Label>Email</Label>
                 <Input />
               </Item>
               <Item floatingLabel last>
                 <Label>Telefone</Label>
                 <Input />
               </Item>
                 <Textarea rowSpan={5} bordered placeholder="Comentarios" />

             </Form>
             <Button block success>
               <Text>Salvar</Text>
             </Button>
           </Content>
      </Container>

    );
  }
}
