import React, { Component } from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
  ActivityIndicator,
  Image,
  ToastAndroid,
  BackHandler
} from 'react-native'

import BluetoothSerial from 'react-native-bluetooth-serial'
// import BluetoothSerialNext from 'react-native-bluetooth-serial-next'
import { Buffer } from 'buffer'
global.Buffer = Buffer
const iconv = require('iconv-lite')

const Button = ({ title, onPress, style, textStyle }) =>
  <TouchableOpacity style={[ styles.button, style ]} onPress={onPress}>
    <Text style={[ styles.buttonText, textStyle ]}>{title.toUpperCase()}</Text>
  </TouchableOpacity>


const DeviceList = ({ devices, connectedId, showConnectedIcon, onDevicePress }) =>
  <ScrollView style={styles.container}>
    <View style={styles.listContainer}>
      {devices.map((device, i) => {
        return (
          <TouchableHighlight
            underlayColor='#DDDDDD'
            key={`${device.id}_${i}`}
            style={styles.listItem} onPress={() => onDevicePress(device)}>
            <View style={{ flexDirection: 'row' }}>
              {showConnectedIcon
              ? (
                <View style={{ width: 48, height: 48, opacity: 0.4 }}>
                  {connectedId === device.id
                  ? (
                    <Image style={{ resizeMode: 'contain', width: 24, height: 24, flex: 1 }} source={require('../assets/ic_done_black_24dp.png')} />
                  ) : null}
                </View>
              ) : null}
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{device.name}</Text>
                <Text>{`<${device.id}>`}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )
      })}
    </View>
  </ScrollView>


// var data = ""
class btData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
      section: 0,
      messageReadState: ""
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    this.props.navigation.navigate('mainLoginScreen')
    return true; // Return true to enable back button over ride.
  }


  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.navigate('mainLoginScreen')
        return true; // Return true to enable back button over ride.
    }
     

  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    Promise.all([
      BluetoothSerial.isEnabled(),
      BluetoothSerial.list()
    ])
    .then((values) => {
      const [ isEnabled, devices ] = values
      this.setState({ isEnabled, devices })
    })

    BluetoothSerial.on('bluetoothEnabled', () => ToastAndroid.showWithGravity('Bluetooth enabled', ToastAndroid.SHORT, ToastAndroid.BOTTOM))
    BluetoothSerial.on('bluetoothDisabled', () => ToastAndroid.showWithGravity('Bluetooth disabled', ToastAndroid.SHORT, ToastAndroid.BOTTOM))
    BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
    BluetoothSerial.on('connectionLost', () => {
      if (this.state.device) {
        ToastAndroid.showWithGravity(`Connection to device ${this.state.device.name} has been lost`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      }
      this.setState({ connected: false })
    })
  }

  /**
   * [android]
   * request enable of bluetooth from user
   */
  requestEnable () {
    BluetoothSerial.requestEnable()
    .then((res) => this.setState({ isEnabled: true }))
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }

  /**
   * [android]
   * enable bluetooth on device
   */
  enable () {
    BluetoothSerial.enable()
    .then((res) => this.setState({ isEnabled: true }))
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }

  /**
   * [android]
   * disable bluetooth on device
   */
  disable () {
    BluetoothSerial.disable()
    .then((res) => this.setState({ isEnabled: false }))
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }

  /**
   * [android]
   * toggle bluetooth
   */
  toggleBluetooth (value) {
    if (value === true) {
      this.enable()
    } else {
      this.disable()
    }
  }

  /**
   * [android]
   * Discover unpaired devices, works only in android
   */
  discoverUnpaired () {
    if (this.state.discovering) {
      return false
    } else {
      this.setState({ discovering: true })
      BluetoothSerial.discoverUnpairedDevices()
      .then((unpairedDevices) => {
        this.setState({ unpairedDevices, discovering: false })
      })
      .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
    }
  }

  /**
   * [android]
   * Discover unpaired devices, works only in android
   */
  cancelDiscovery () {
    if (this.state.discovering) {
      BluetoothSerial.cancelDiscovery()
      .then(() => {
        this.setState({ discovering: false })
      })
      .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
    }
  }

  /**
   * [android]
   * Pair device
   */
  pairDevice (device) {
    BluetoothSerial.pairDevice(device.id)
    .then((paired) => {
      if (paired) {
        ToastAndroid.showWithGravity(`Device ${device.name} paired successfully`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)

        const devices = this.state.devices
        devices.push(device)
        this.setState({ devices, unpairedDevices: this.state.unpairedDevices.filter((d) => d.id !== device.id) })
      } else {
        ToastAndroid.showWithGravity(`Device ${device.name} paired successfully`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      }
    })
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
}

  /**
   * Connect to bluetooth device by id
   * @param  {Object} device
   */
  connect (device) {
    this.setState({ connecting: true })
    BluetoothSerial.connect(device.id)
    .then((res) => {
        ToastAndroid.showWithGravity(`Connection to device ${this.state.device.name} has been lost`, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      this.setState({ device, connected: true, connecting: false })
    })
    .catch((err) => ToastAndroid.showWithGravity(err.message + "test", ToastAndroid.SHORT, ToastAndroid.BOTTOM))
}

  /**
   * Disconnect from bluetooth device
   */
  disconnect () {
    BluetoothSerial.disconnect()
    .then(() => this.setState({ connected: false }))
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
}

  /**
   * Toggle connection when we have active device
   * @param  {Boolean} value
   */
  toggleConnect (value) {
    if (value === true && this.state.device) {
      this.connect(this.state.device)
    } else {
      this.disconnect()
    }
  }

  /**
   * Read message from device
   * @param  {String} message
   */
  read (message) {
    if (!this.state.connected) {
        ToastAndroid.showWithGravity('You must connect to device first', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    }

    BluetoothSerial.read(message)
    .then((res) => {
        // ToastAndroid.showWithGravity('Successfuly wrote to device', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        console.log("message read: " + message)
      this.setState({ connected: true, messageReadState: message})
    })
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }

  async readIncomingData() { 
    dataRead = await BluetoothSerial.readFromDevice();
    this.setState({ messageReadState: dataRead})
  }

  readFromDevice() {
    if (!this.state.connected) {
      ToastAndroid.showWithGravity('You must connect to device first', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    }

    setInterval( () => {
      BluetoothSerial.readFromDevice().then((data) => {
        console.log("reading:" + data)
        this.setState({ messageReadState: data})
      })
    }, 1000)

    // BluetoothSerial.readFromDevice(device.id)
    // .then((res) => {
    //   // ToastAndroid.showWithGravity('Successfuly wrote to device', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    //   console.log("message read: " + messageReadState)
    // this.setState({ connected: true, messageReadState: messageReadState})
  // })
  // .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }

  /**
   * Write message to device
   * @param  {String} message
   */
  write (message) {
    if (!this.state.connected) {
        ToastAndroid.showWithGravity('You must connect to device first', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    }

    BluetoothSerial.write(message)
    .then((res) => {
        ToastAndroid.showWithGravity('Successfuly wrote to device', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
      this.setState({ connected: true })
    })
    .catch((err) => ToastAndroid.showWithGravity(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM))
  }
  
  onDevicePress (device) {
    if (this.state.section === 0) {
      this.connect(device)
      console.log("connected to " + JSON.stringify(device))
      // this.read()
      // this.readIncomingData();
      this.readFromDevice(device)
    } else {
      this.pairDevice(device)
    }
  }

  writePackets (message, packetSize = 64) {
    const toWrite = iconv.encode(message, 'cp852')
    const writePromises = []
    const packetCount = Math.ceil(toWrite.length / packetSize)

    for (var i = 0; i < packetCount; i++) {
      const packet = new Buffer(packetSize)
      packet.fill(' ')
      toWrite.copy(packet, 0, i * packetSize, (i + 1) * packetSize)
      writePromises.push(BluetoothSerial.write(packet))
    }

    Promise.all(writePromises)
    .then((result) => {
    })
  }

  render () {
    const activeTabStyle = { borderBottomWidth: 6, borderColor: '#009688' }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topBar}>
          <Text style={styles.heading}>BT Dashboard</Text>
          {Platform.OS === 'android'
          ? (
            <View style={styles.enableInfoWrapper}>
              <Text style={{ fontSize: 12, color: '#FFFFFF' }}>
                {this.state.isEnabled ? 'disable' : 'enable'}
              </Text>
              <Switch
                onValueChange={this.toggleBluetooth.bind(this)}
                value={this.state.isEnabled} />
            </View>
          ) : null}
        </View>

        {Platform.OS === 'android'
        ? (
          <View style={[styles.topBar, { justifyContent: 'center', paddingHorizontal: 0 }]}>
            <TouchableOpacity style={[styles.tab, this.state.section === 0 && activeTabStyle]} onPress={() => this.setState({ section: 0 })}>
              <Text style={{ fontSize: 14, color: '#FFFFFF' }}>PAIRED DEVICES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, this.state.section === 1 && activeTabStyle]} onPress={() => this.setState({ section: 1 })}>
              <Text style={{ fontSize: 14, color: '#FFFFFF' }}>UNPAIRED DEVICES</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {this.state.discovering && this.state.section === 1
        ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
              style={{ marginBottom: 15 }}
              size={60} />
            <Button
              textStyle={{ color: '#FFFFFF' }}
              style={styles.buttonRaised}
              title='Cancel Discovery'
              onPress={() => this.cancelDiscovery()} />
          </View>
        ) : (
          <DeviceList
            showConnectedIcon={this.state.section === 0}
            connectedId={this.state.device && this.state.device.id}
            devices={this.state.section === 0 ? this.state.devices : this.state.unpairedDevices}
            onDevicePress={(device) => this.onDevicePress(device)} />
        )}


        <View style={{ alignSelf: 'flex-end', height: 52 }}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.fixedFooter}>
            {Platform.OS === 'android' && this.state.section === 1
            ? (
              <Button
                title={this.state.discovering ? '... Discovering' : 'Discover devices'}
                onPress={this.discoverUnpaired.bind(this)} />
            ) : null}
            {Platform.OS === 'android' && !this.state.isEnabled
            ? (
              <Button
                title='Request enable'
                onPress={() => this.requestEnable()} />
            ) : null}
          </ScrollView>
        </View>
        <Text>Read messages from devices: {this.state.messageReadState} </Text>
        {/* <Text>Read messages from devices: {JSON.stringify(this.state.device)}</Text> */}
        {/* <Text>Read messages from devices: {data}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#F5FCFF'
  },
  topBar: { 
    height: 56, 
    paddingHorizontal: 16,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' ,
    elevation: 6,
    backgroundColor: '#7B1FA2'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    color: '#FFFFFF'
  },
  enableInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tab: { 
    alignItems: 'center', 
    flex: 0.5, 
    height: 56, 
    justifyContent: 'center', 
    borderBottomWidth: 6, 
    borderColor: 'transparent' 
  },
  connectionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  connectionInfo: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    color: '#238923'
  },
  listContainer: {
    borderColor: '#ccc',
    borderTopWidth: 0.5
  },
  listItem: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  },
  fixedFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  button: {
    height: 36,
    margin: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#7B1FA2',
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonRaised: {
    backgroundColor: '#7B1FA2',
    borderRadius: 2,
    elevation: 2
  }
})

export default btData

