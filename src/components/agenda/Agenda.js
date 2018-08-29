import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Title, Body, Left,
  Right, Text
} from 'native-base';

export default class Agenda extends Component {
  componentWillMount() {
    console.log('agenda');
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

  salvarDados(){
    var database = firebase.database();
    database.ref("pontuacao").set("191");
  }

  render() {
    return (
      <View>
        <Button
          onPress={ ()=>{ this.salvarDados();} }
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"/>
          <Text>Meu App</Text>
      </View>
    );
  }
}
