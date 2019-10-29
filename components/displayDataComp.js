// import React from 'react';
// import { View, StyleSheet, Text, ToastAndroid } from 'react-native';

// import BluetoothSerial from 'react-native-bluetooth-serial';

// class DisplayDataComp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.events = null
//         this.state = {
//             isEnabled: null,
//             device: null,
//             devices: [],
//             scanning: false,
//             processing: false,
//         }
//     }

//     async componentDidMount() {
//         this.events = this.props.events

//         try {
//             const [isEnabled, devices] = await Promise.all[(
//                 BluetoothSerial.isEnabled(),
//                 BluetoothSerial.isConnected()
//             )]

//             this.setState({
//                 isEnabled,
//                 devices: devices.map(device => ({
//                     ...device,
//                     paired: true,
//                     connected: false
//                 }))
//             })
//         } catch (e) {
//             // ToastAndroid.show(e.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
//             ToastAndroid.show('Not enabled not connected', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
//         }
        
        
//         this.events.on("bluetoothEnabled", () => {
//             Toast.showShortBottom("Bluetooth enabled");
//             this.setState({ isEnabled: true });
//         });

//         this.events.on("bluetoothDisabled", () => {
//             Toast.showShortBottom("Bluetooth disabled");
//             this.setState({ isEnabled: false });
//         });

//         this.events.on("connectionSuccess", ({ device }) => {
//             if (device) {
//                 Toast.showShortBottom(
//                     `Device ${device.name}<${device.id}> has been connected`
//                 );
//             }
//         });

//         this.events.on("connectionFailed", ({ device }) => {
//             if (device) {
//                 Toast.showShortBottom(
//                     `Failed to connect with device ${device.name}<${device.id}>`
//                 );
//             }
//         });

//         this.events.on("connectionLost", ({ device }) => {
//             if (device) {
//                 Toast.showShortBottom(
//                     `Device ${device.name}<${device.id}> connection has been lost`
//                 );
//             }
//         });

//         this.events.on("data", result => {
//             if (result) {
//                 const { id, data } = result;
//                 console.log(`Data from device ${id} : ${data}`);
//             }
//         });

//         this.events.on("error", e => {
//             if (e) {
//                 console.log(`Error: ${e.message}`);
//                 Toast.showShortBottom(e.message);
//             }
//         });
        
//         toggleBluetooth = async value => {
//             try {
//                 if (value) {
//                     await BluetoothSerial.enable();
//                 } else {
//                     await BluetoothSerial.disable();
//                 }
//             } catch (e) {
//                 Toast.showShortBottom(e.message);
//             }
//         };

//     }

//     render() {
//         const { isEnabled, scanning, processing, device, devices} = this.state
//         return (
//             <View
//                 style={styles.main}
//             >
//                 {/** Component that displays data read from gyro data from BT serial interface on Rpi */}
//                 <Text></Text>
//                     <View style={styles.enableInfoWrapper}>
//                         <Text style={{ fontSize: 14, color: "#fff", paddingRight: 10 }}>
//                             {isEnabled ? "ON" : "OFF"}
//                         </Text>
//                         <Switch onValueChange={this.toggleBluetooth} value={isEnabled} />
//                     </View>            
//                 </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         justifyContent: 'center',
//         // flexDirection: 'column'
//     }
// });

// export default withSubscription({
//     subscriptionName: 'events',
//     destroyOnWillUnmount: true,
// })(MyComponent);;