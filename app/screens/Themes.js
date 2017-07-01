import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple'
});

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/themes';

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        primaryColor: PropTypes.string
    };

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={ false } barStyle="default" />
                <ListItem
                    text="Blue"
                    onPress={ () => this.handleThemePress(styles.$blue) }
                    selected
                    checkmark={ false }
                    iconBackground={ styles.$blue }
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={ () => this.handleThemePress(styles.$orange) }
                    selected
                    checkmark={ false }
                    iconBackground={ styles.$orange }
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={ () => this.handleThemePress(styles.$green) }
                    selected
                    checkmark={ false }
                    iconBackground={ styles.$green }
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={ () => this.handleThemePress(styles.$purple) }
                    selected
                    checkmark={ false }
                    iconBackground={ styles.$purple }
                />
                <Separator />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    primaryColor: state.primaryColor
});

export default connect(mapStateToProps)(Themes);
