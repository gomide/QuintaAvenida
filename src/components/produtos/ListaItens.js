import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';
import { Container, Header, View, Content, Footer, FooterTab, Button, Icon, Title, Body, Left,
  Right, Text
} from 'native-base';


export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: []};
  }

  componentWillMount() {
    console.log('teste2');
    axios.get('http://megati.adaoimoveis.com.br/buscap/api/imoveis/4/N')
      .then(response => { this.setState({listaItens: response.data.imoveis}); })
      .catch(() => { console.log('erro ao recuperar os dados'); });

  }

  render() {
    return (


   <ScrollView>
     { this.state.listaItens.map(item => (<Itens key={item.EST_ST_CODIGO} item={item} />)) }
   </ScrollView>

    );
  }
}
