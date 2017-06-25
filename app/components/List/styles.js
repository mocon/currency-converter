import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const ICON_WIDTH = 30;

export default EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white'
    },
    text: {
        fontSize: 16,
        color: '$darkText'
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth
    },
    icon: {
        backgroundColor: 'transparent',
        width: ICON_WIDTH,
        height: ICON_WIDTH,
        borderRadius: ICON_WIDTH / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconVisible: {
        backgroundColor: '$primaryBlue'
    },
    checkIcon: {
        width: 16
    }
});
