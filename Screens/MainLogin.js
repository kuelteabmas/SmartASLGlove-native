import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image, 
    Dimensions,
    Button, 
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

class MainLoginScreen extends React.Component {

    render() {
        return(
            <View style={styles.main}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image 
                        source={require('../assets/soundbg.jpeg')} 
                        style={styles.loginbgimg}
                        />
                </View>
                <View style={styles.loginbuttons}>

                    <TouchableOpacity
                        style={styles.button}
                        title='SIGN IN'
                        onPress={() => {this.props.navigation.navigate('homeScreen')}} // Will Navigate to LoginScreen.js when btn is pressed
                    >
                        <Text style={styles.textbutton}>SIGN IN</Text>

                    </TouchableOpacity>
                
                    <View style={[styles.button, {backgroundColor: 'lightyellow'}]}>
                        <Text style={styles.textbutton}>SIGN IN WITH GOOGLE</Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: 'lightgreen'}]}
                        title='SIGN UP'
                        onPress={() => this.props.navigation.navigate('signUpScreen') } // Will Navigate to SignUpScreen.js when btn is pressed
                    >
                        <Text style={styles.textbutton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default MainLoginScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
    },
    loginbgimg: {
        flex: 1,
        height: null,
        width: null
    },
    loginbuttons: {
        height: height/3,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 45,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1
    },
});