import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

import BleManager from 'react-native-ble-manager';

BleManager.start({showAlert: false})
  .then(() => {
    // Success code
    console.log('Module initialized');
  });

class displayDataComp extends React.Component {

    render() {
        return(
            <View style={styles.main}>                
            {/** Component that displays data read from gyro data from BT serial interface on Rpi */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        // flexDirection: 'column'
    }
});

export default displayDataComp;