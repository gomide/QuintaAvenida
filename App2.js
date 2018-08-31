import React, { Component } from 'react';
import {
  AppRegistry, Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ListaItens from './src/components/produtos/ListaItens';
import ListaClientes from './src/components/clientes/ListaClientes';
import ListaAlertas from './src/components/alertas/ListaAlertas';
import Agenda from './src/components/agenda/Agenda';

export default class buscaImovel extends Component {

componentWillMount() {
  <Text>teste2</Text>
}

  render() {
    return (

   <Router hideNavBar= "true">
     <Scene key='ListaItens' component={ListaItens}  />
     <Scene key='ListaClientes' component={ListaClientes} initial={true} />
     <Scene key='ListaAlertas' component={ListaAlertas}  />
     <Scene key='Agenda' component={Agenda}  />
   </Router>

    );
  }
}

AppRegistry.registerComponent('buscaImovel', () => buscaImovel);
