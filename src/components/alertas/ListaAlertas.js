import React, { Component } from 'react';
import {
  ScrollView, ListView
} from 'react-native';
import { Container, Header, View, Content, Footer, FooterTab, Button, Icon, Title, Body, Left,
  Right, Text, List, ListItem
} from 'native-base';

const datas = [
  'Ligar para Lucas',
  'Cliente Pedro expirado',
  'Reunião Aline',
  'Retrirar contrato SecVendas',
  'Lista de Oferta disponivel',
  'Cliente disponivel',
  'Novo imovel cadastrado',
  'Ligar para Marina',
];

export default class ListaAlertas extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (

   <ScrollView >
    <Content>
        <List
          dataSource={this.ds.cloneWithRows(this.state.listViewData)}
          renderRow={data =>
            <ListItem>
              <Text> {data} </Text>
            </ListItem>}
          renderLeftHiddenRow={data =>
            <Button full onPress={() => alert(data)}>
              <Icon active name="information-circle" />
            </Button>}
          renderRightHiddenRow={(data, secId, rowId, rowMap) =>
            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
              <Icon active name="trash" />
            </Button>}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </Content>
   </ScrollView>


    );
  }
}
