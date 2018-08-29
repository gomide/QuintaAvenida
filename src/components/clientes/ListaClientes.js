import React, { Component } from 'react';
import {
  ScrollView, StyleSheet
} from 'react-native';
import { Container, Header, View, Content, Footer, FooterTab, Button, Icon, Title, Body, Left,
  Right, Text, List, ListItem, Thumbnail, Badge, Fab
} from 'native-base';
import ActionButton  from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default class ListaClientes extends Component {

  render() {
    return (

<View style={styles.Visual}>

   <ScrollView style={styles.Visual}>

    <List style={styles.Visual}>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fgyn3-1.fna.fbcdn.net/vp/1d7e51ba6e35b8e4fd79227bbf8ea6aa/5BA02803/t51.2885-15/e15/11378102_922766944439359_2073680928_n.jpg' }} />
            <Body>
              <Text>Rafael Gomide</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://scontent-gru2-2.cdninstagram.com/vp/7eff572b22b194c9204f9d9af480149c/5BAB41A9/t51.2885-15/sh0.08/e35/p640x640/12816818_562354363924782_1744304488_n.jpg' }} />
            <Body>
              <Text>Alef Fabricio</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fbsb13-1.fna.fbcdn.net/vp/b5bed2f36b6aeea62187e35b61203781/5BA832D5/t51.2885-15/s320x320/e35/19622804_133783437204753_5923293224453013504_n.jpg' }} />
            <Body>
              <Text>Gabriela Rocha</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>

            </Body>

          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fgyn3-1.fna.fbcdn.net/vp/1d7e51ba6e35b8e4fd79227bbf8ea6aa/5BA02803/t51.2885-15/e15/11378102_922766944439359_2073680928_n.jpg' }} />
            <Body>
              <Text>Rafael Gomide</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://scontent-gru2-2.cdninstagram.com/vp/7eff572b22b194c9204f9d9af480149c/5BAB41A9/t51.2885-15/sh0.08/e35/p640x640/12816818_562354363924782_1744304488_n.jpg' }} />
            <Body>
              <Text>Alef Fabricio</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fbsb13-1.fna.fbcdn.net/vp/b5bed2f36b6aeea62187e35b61203781/5BA832D5/t51.2885-15/s320x320/e35/19622804_133783437204753_5923293224453013504_n.jpg' }} />
            <Body>
              <Text>Gabriela Rocha</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>

            </Body>

          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fgyn3-1.fna.fbcdn.net/vp/1d7e51ba6e35b8e4fd79227bbf8ea6aa/5BA02803/t51.2885-15/e15/11378102_922766944439359_2073680928_n.jpg' }} />
            <Body>
              <Text>Rafael Gomide</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://scontent-gru2-2.cdninstagram.com/vp/7eff572b22b194c9204f9d9af480149c/5BAB41A9/t51.2885-15/sh0.08/e35/p640x640/12816818_562354363924782_1744304488_n.jpg' }} />
            <Body>
              <Text>Alef Fabricio</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: 'https://instagram.fbsb13-1.fna.fbcdn.net/vp/b5bed2f36b6aeea62187e35b61203781/5BA832D5/t51.2885-15/s320x320/e35/19622804_133783437204753_5923293224453013504_n.jpg' }} />
            <Body>
              <Text>Gabriela Rocha</Text>
              <Text note>Trabalha na Adão Imoveis . .</Text>

            </Body>

          </ListItem>

    </List>



   </ScrollView>

   <ActionButton
    buttonColor='#3F51B5'

fixNativeFeedbackRadius = {true}

     onPress={() => { Actions.CadastroCliente();  }}
   />
</View>



    );
  }
}

const styles = StyleSheet.create({
  botaoFab: {
    shadowColor:'#000',
    shadowOffset: {
      width:0, height:5
    },
    shadowOpacity: 1
  },
  Visual: {
    flex: 1
  }
})
