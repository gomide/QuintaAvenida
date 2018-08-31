import React from 'react';
import { Icon }  from 'native-base';
import {
            StyleSheet, 
            View, 
            Text, 
            Button, 
            TextInput, 
            TouchableHighlight, 
            Image, 
            ImageBackground, 
            StatusBar  
        } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { 
            modificaEmail, 
            modificaSenha 
        } from '../../actions/AutenticacaoActions';
import CadastroUsuario from '../login/CadastroUsuario';
import RotasAplicativo from '../rotas/RotasAplicativo';

const Login = props => {
    console.log(props);
    return (
        <ImageBackground 
            style={{
                flex: 1, 
                width: undefined
            }}  
            source={require("../imgs/bgo.png")}>
            <View 
                style={{ 
                    flex: 3, 
                    padding: 10, 
                    backgroundColor: '#fff'
                    
                }}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
                <View 
                    style={{ 
                        flex: 1, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexDirection: 'row'                     
                    }}>
                    <Image 
                        style={styles.ImgLogo} 
                        source={require('../imgs/quintaavenida.png')}/>
                    <Text style={styles.TextoLogo} >
                        QuintaAvenida
                    </Text>
                </View>
                <View 
                    style={{ flex: 2}}>
                    <View style={{ left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={{color: '#ddd'}} name="person" />
                        <TextInput 
                            onChangeText={texto => props.modificaEmail(texto)} 
                            value={props.email} 
                            underlineColorAndroid='#a8b0b5' 
                            placeholderTextColor='#a8b0b5'  
                            style={{ 
                                margin: 10,  
                                fontSize: 20, 
                                height: 50, 
                                color: '#a8b0b5',
                                width: 310
                            }} 
                            placeholder='E-mail' />
                    </View>
                    <View style={{ left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={{color: '#ddd'}} name="key" />
                        <TextInput 
                            secureTextEntry 
                            onChangeText={texto => props.modificaSenha(texto)} 
                            value={props.senha} 
                            underlineColorAndroid='#a8b0b5' 
                            placeholderTextColor='#a8b0b5'  
                            style={{
                                margin: 10,  
                                fontSize: 20, 
                                height: 50, 
                                color: '#a8b0b5',
                                width: 310
                            }} 
                            placeholder='Senha' />
                    </View>
                    <TouchableHighlight onPress= {() => { Actions.CadastroUsuario(); }}>
                        <View style={{alignItems: 'center'}}>
                            <Text  style={styles.TextoCadastro}>
                                Ainda não tem cadastro? Cadastre-se aqui
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style={{ flex: 1}}>
                    <Button                        
                        title= 'Acessar'  
                        color='#6e45ba' 
                        onPress= {() => { Actions.RotasAplicativo(); }}/>                  
                </View>
            </View>
        </ImageBackground >

    );
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

const styles = StyleSheet.create({
    TextoLogo: {
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10, 
        fontSize: 35, 
        color: '#6e45ba'
    },
    ImgLogo: {
        width: 70, 
        height: 70
    },
    TextoCadastro: {
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10, 
        fontSize: 18, 
        color: '#000',
        marginTop: 20
    }
});
export default connect(mapStateToProps, {modificaEmail, modificaSenha} )(Login);
