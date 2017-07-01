/* eslint react/forbid-prop-types: 0 */
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ backgroundColor, children }) => (
    <View style={ [ styles.container, { backgroundColor }] }>
        { children }
    </View>
);

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string
};

export default Container;
