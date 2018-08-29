import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Container, Header, Footer, FooterTab, Button, Icon, Title, Body, Text
} from 'native-base';

import ListaItens from '../produtos/ListaItens';
import ListaClientes from '../clientes/ListaClientes';
import CadastroCliente from '../clientes/CadastroCliente';
import ListaAlertas from '../alertas/ListaAlertas';
import Agenda from '../agenda/Agenda';



export default class RotasAplicativo extends Component {


  render() {
    return (
      <Container>

   <Header elevation={30} style={styles.topo}>

     <Body style={styles.titulo}>
       <Title style={styles.textoTitulo}>QuintaAvenida</Title>
     </Body>
   </Header>

   <Router hideNavBar="true">
    <Scene key="root"
      tabs={true}  unmountScenes  >
         <Scene key='ListaItens' component={ListaItens} title='Busca Imoveis'   />
         <Scene key='ListaClientes' component={ListaClientes} initial={true} />
         <Scene key='CadastroCliente' component={CadastroCliente} />
         <Scene key='ListaAlertas' component={ListaAlertas} title='Lista Alertas' />
         <Scene key='Agenda' component={Agenda}   title='Agenda' />
      </Scene>
   </Router>


  <Footer style={styles.rodape}>
    <FooterTab style={styles.rodape2}>
      <Button onPress= {() => { Actions.ListaClientes();}}>
        <Icon style={styles.icone} style={styles.icone} name="person" />
        <Text style={styles.texto}>Clientes</Text>

      </Button>
      <Button onPress= {() => { Actions.Agenda(); }}>
        <Icon style={styles.icone} style={styles.icone} name="calendar" />
        <Text style={styles.texto}>Agenda</Text>
      </Button>
      <Button onPress= {() => { Actions.ListaItens();  }}>
        <Icon  style={styles.icone} active name="home" />
        <Text style={styles.texto} >Produtos</Text>
      </Button>
      <Button onPress= {() => { Actions.ListaAlertas(); }}>
      <Icon style={styles.icone} name="notifications" />
      <Text style={styles.texto} >Alertas</Text>
      </Button>

    </FooterTab>
  </Footer>
</Container>

    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset: {
      width:0, height:5
    },
    shadowOpacity:1
  },
  topo: {
    height:40,
    shadowColor:'#000',
    shadowOffset: {
      width:0, height:115
    },
    shadowOpacity:1

  },
  rodape: {
    height: 45,
    shadowColor:'#000',
    shadowOffset: {
      width:0, height:5
    },
    shadowOpacity: 1

  },
  rodape2: {

  },
  icone:{
    fontSize: 15,

  },
  texto:{
    fontSize: 10,

  },
  textoTitulo: {
    shadowColor:'#000',
    shadowOffset: {
      width:0, height:5
    },
    shadowOpacity:1,
    color: '#fff'
  }
})
