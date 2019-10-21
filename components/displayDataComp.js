import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, NativeAppEventEmitter } from 'react-native';

import BleManager from 'react-native-ble-manager';

// Start BleManager lib
BleManager.start()
  .then(() => {
    // Success code
    console.log('Module initialized');
  })
  .catch(() => {
    console.error("Failed to start module");
  });

  

function getConnectedPeriper() {
    BleManager.getConnectedPeripherals([])
    .then((peripheralsArray) => {
        // print connected devices 
        console.log('Connected peripherals: ' + peripheralsArray.length);
    })
}

class DisplayDataComp extends React.Component { 
    constructor() {
        super()

    //     this.state = {
    //         gyroData: [],
    //         accerloData: [],
    //         adcData: []
    //     }
    //     this.btStatus = this.btStatus.bind(this)

    }

    // // get MAC 


    // handleChange(event) {
    //     this.setState({
    //         readData: ''
    //     })
    // }

    // componentDidMount() {
    //     NativeAppEventEmitter.addListener('BleManagerDIscover', data) => {
    //         console.log(data)
    //     }
    // }


    render() {
        return(
            <View 
                style={styles.main}
                >                   
                {/** Component that displays data read from gyro data from BT serial interface on Rpi */}
                {getConnectedPeriper()}
                <Text>{}</Text>
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

export default DisplayDataComp;