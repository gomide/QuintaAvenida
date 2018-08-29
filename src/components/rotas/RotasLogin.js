import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../login/Login';
import CadastroUsuario from '../login/CadastroUsuario';
import RotasAplicativo from './RotasAplicativo';

export default props => (
    <Router hideNavBar="true">
        <Scene key="root"
        tabs={true}  unmountScenes  >
            <Scene key='Login' component={Login} initial />
            <Scene key='CadastroUsuario' component={CadastroUsuario}  />
            <Scene key='RotasAplicativo' component={RotasAplicativo}    />
        </Scene>
    </Router>

);