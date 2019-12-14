import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, BackHandler, Alert } from 'react-native';
// import { MessageTextComp } from '../components/btserial'
// import { MessageTextComp } from '../components/btserial'

class SignToTextScreen extends React.Component {

    static navigationOptions = {
        title: 'Sign To Text',
      };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.navigate('homeScreen')
        return true; // Return true to enable back button over ride.
    }

    render() {
        return(
            // <View style={styles.main}>    
            // {/* this.props.navigation.state.params.update();//you can pass params also if needed            
            //     <Text style={styles.translation}>Read messages from devices: {this.props.messageReadState} </Text> */}
            //     {/* <Text>Read messages from devices: {JSON.stringify(this.state.device)}</Text> */}
            //     {/* <Text>Read messages from devices: {data}</Text> */}

                
            // </View>
            <View>
                {/* <MessageTextComp /> */}
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
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
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
    translation: {
        fontSize: 20,
        fontWeight: 'bold',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        justifyContent: 'center',
    }
});

export default SignToTextScreen;