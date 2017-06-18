import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Changes you make will automatically reload.</Text>
                <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff'
    }
});
