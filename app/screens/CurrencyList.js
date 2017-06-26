import React, { Component } from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    handlePress = () => {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={ false } barStyle="default" />
                <FlatList
                    data={ currencies }
                    renderItem={ ({ item }) => (
                        <ListItem
                            text={ item }
                            selected={ item === TEMP_CURRENT_CURRENCY }
                            onPress={ this.handlePress }
                        />
                    ) }
                    keyExtractor={ (item) => item }
                    ItemSeparatorComponent={ Separator }
                />
            </View>
        );
    }
}

CurrencyList.propTypes = {
    data: PropTypes.array
};

export default CurrencyList;
