import React from 'react';
<<<<<<< Updated upstream
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
=======
import { View, StyleSheet, Text, TouchableOpacity, BackHandler, Alert} from 'react-native';

import DisplayDataComp from '../components/displayDataComp'
// import Btexp from '../components/btexp'
// import btserialnext from '../components/btserialnext'
import { PairingSettingsComp } from '../components/btserial'
>>>>>>> Stashed changes

import displayDataComp from '../components/'

class SignsToVoiceTextScreen extends React.Component {


    render() {
        return(
            <View style={styles.main}>                
                {/** Component that displays data read from gyro data from BT serial interface on Rpi */}
<<<<<<< Updated upstream
                <displayDataComp />
=======
                {/* <DisplayDataComp /> */}
                <BluetoothSerial />
>>>>>>> Stashed changes
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