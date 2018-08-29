import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet
} from 'react-native';

export default class Itens extends Component {

  render() {
    {
      imgsImov = 'http://megati.adaoimoveis.com.br/imagem/adao/'+this.props.item.EST_ST_CODIGO+'/1.jpg'
    }
    return (
      <View style={styles.item}>


        <View style={styles.detalhesItem}>
          <Text>#{this.props.item.UND_IN_PROCESSO}, {this.props.item.UND_TIPO_ESP}</Text>
          <Text style={styles.txtTitulo} >{this.props.item.ENE_ST_MUNICIPIO}, {this.props.item.ENE_ST_BAIRRO}</Text>
          <Text>Area:{this.props.item.UND_RE_AREATOTAL}m²</Text>
          <Text>Valor: R$ {this.props.item.UND_RE_VALORUNIDADE},00</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  fotos: {
    width: 132,
    height: 132
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo:{
    fontSize: 15,
    color: 'blue',
    marginBottom: 5
  }
});
