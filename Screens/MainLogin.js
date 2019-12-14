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
                    {/* <Image 
                        source={require('../assets/soundbg.jpeg')} 
                        style={styles.loginbgimg}
                        /> */}

                    <Image 
                        source={require('../assets/asl_logo-2-blk.png')} 
                        // source={require('../assets/asl_logo-2.png')} 
                        // source={require('../assets/ASL-Logo.png')} 
                        style={styles.loginlogoimg}
                        resizeMode="contain"
                        />
                </View>
                <View style={styles.loginbuttons}>

                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: 'lightblue'}]}
                        title='SIGN IN'
                        // onPress={() => {this.props.navigation.navigate('homeScreen')}} // Will Navigate to LoginScreen.js when btn is pressed
                        onPress={() => {this.props.navigation.navigate('loginScreen')}} // Will Navigate to LoginScreen.js when btn is pressed
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
    loginlogoimg: {
        flex: 1,
        height: null,
        width: null,
        marginBottom: 150,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginbuttons: {
        height: height/3,
        justifyContent: 'center'
    },
    button: {
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
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