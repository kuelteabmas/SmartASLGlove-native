// import Voice from 'react-native-voice';
// import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, BackHandler, Alert} from 'react-native';

// class VoiceToText extends React.Component {
//     constructor(props) {
//         Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
//         Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
//         Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
//       }
//       onStartButtonPress(e){
//         Voice.start('en-US');
//       }

//     componentWillMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
//     }

//     componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
//     }

//     onBackPress = () => {
//         this.props.navigation.navigate('homeScreen')
//         return true; // Return true to enable back button over ride.
//     }
    

//     render() {
//         return(
//             <View style={styles.main}>                
//                 <Text style={styles.VTTView}>TEEST ESTST</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         justifyContent: 'center',
//         flexDirection: 'column'
//     },
//     button: {
//         backgroundColor: 'white',
//         height: 120,
//         marginHorizontal: 20,
//         borderRadius: 35,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 20
//     },
//     VTTView: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         shadowColor: 'black',
//         shadowOpacity: 0.2,
//         shadowOffset: { width: 2, height: 2 },
//     },
// });

// export default VoiceToText;