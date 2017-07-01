/* eslint react/no-multi-comp: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $darkText: '#343434',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    // outline: 1 // Outline all components
});

const App = ({ dispatch, nav }) => (
    <Navigator
        navigation={ addNavigationHelpers({
            dispatch,
            state: nav
        }) }
    />
);

App.propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

const Index = () => (
    <Provider store={ store }>
        <AlertProvider>
            <AppWithNavigation
                onNavigationStateChange={ null }
            />
        </AlertProvider>
    </Provider>
);

export default Index;
