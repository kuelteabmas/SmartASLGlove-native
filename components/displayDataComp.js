import React from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';


class DisplayDataComp extends React.Component {

    render() {
        return (
            <View
                style={styles.main}
            >
            {/** Component that displays data read from gyro data from BT serial interface on Rpi */}
                <View style={styles.enableInfoWrapper}>
                    <Text style={{ fontSize: 14, color: "#fff", paddingRight: 10 }}>
                        {isEnabled ? "ON" : "OFF"}
                    </Text>
                    <Switch onValueChange={this.toggleBluetooth} value={isEnabled} />
                </View>            
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

export default DisplayDataComp