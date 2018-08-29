import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import RotasLogin from './src/components/rotas/RotasLogin';
import reducers from './src/reducers';

export default class buscaImovel extends Component {
  
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCWyaQzEZCyiKQhymNBZV7PRq67RtGbtAg",
      authDomain: "quintaavenida-1705.firebaseapp.com",
      databaseURL: "https://quintaavenida-1705.firebaseio.com",
      projectId: "quintaavenida-1705",
      storageBucket: "quintaavenida-1705.appspot.com",
      messagingSenderId: "431977158197"
    };
    firebase.initializeApp(config);
  }
  render() {
    return ( 
      <Provider store={createStore(reducers)}>  
        <RotasLogin />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('buscaImovel', () => buscaImovel);
