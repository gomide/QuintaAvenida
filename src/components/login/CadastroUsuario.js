import React from 'react';
import { 
            View, 
            TextInput, 
            Button 
        } from 'react-native';
import { connect } from 'react-redux';
import { 
            modificaEmail, 
            modificaSenha, 
            modificaNome 
        } from '../../actions/AutenticacaoActions';
const CadastroUsuario =  props => {
    console.log(props);
    return (
        <View 
            style={{ 
                    flex: 1, 
                    padding: 10
                    }}>
            <View 
                style={{ 
                        flex: 4, 
                        justifyContent: 'center'
                    }}>
                    <TextInput 
                        onChangeText={texto => props.modificaNome(texto)} 
                        value={props.nome} 
                        placeholder='Nome' 
                        style={{ 
                                margin:10, 
                                fontSize:20, 
                                height: 45
                                }} />
                <TextInput 
                        onChangeText={texto => props.modificaEmail(texto)} 
                        value={props.email} 
                        placeholder='E-mail' 
                        style={{ 
                                margin:10, 
                                fontSize:20, 
                                height: 45
                            }} />
                <TextInput 
                        secureTextEntry 
                        onChangeText={texto => props.modificaSenha(texto)} 
                        value={props.senha} 
                        placeholder='Senha' 
                        style={{ 
                                margin:10, 
                                fontSize:20, 
                                height: 45
                                }} />
            </View>
            <View style={{ flex: 1}}>
                <Button 
                    title="Cadastrar" 
                    color='#3F51B5' 
                    onPress={() => false} />
            </View>
        </View>

    );
}
const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

export default connect(mapStateToProps, {modificaEmail, modificaSenha, modificaNome })(CadastroUsuario);