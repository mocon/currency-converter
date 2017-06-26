import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({ text, selected = false, checkmark = true, visible = true, customIcon = null, iconBackground, onPress }) => (
    <TouchableHighlight
        onPress={ onPress }
        underlayColor={ styles.$underlayColor }
    >
        <View style={ styles.row }>
            <Text style={ styles.text }>{ text }</Text>
            { (selected) ? <Icon checkmark={ checkmark } visible={ visible } iconBackground={ iconBackground } /> : <Icon /> }
            { customIcon }
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
    onPress: PropTypes.func
};

export default ListItem;
