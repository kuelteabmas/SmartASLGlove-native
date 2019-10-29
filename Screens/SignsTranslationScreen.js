import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

import DisplayDataComp from '../components/displayDataComp'
// import Btexp from '../components/btexp'
// import btserial from '../components/btserial'


class SignsToVoiceTextScreen extends React.Component {


    render() {
        return(
            <View style={styles.main}>                
                {/** Component that displays data read from gyro data from BT serial interface on Rpi */}
                {/* <DisplayDataComp /> */}
                <Text>Hey!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'white',
        height: 120,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
    },
});

export default SignsToVoiceTextScreen;