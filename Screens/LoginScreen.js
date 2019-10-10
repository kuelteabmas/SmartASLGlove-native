import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const userInfo= {email: 'admin', password: '12345'}

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: ''
    }

  }
  
  _onLogin = async () => {
    console.log("Login Button pressed");
    if (userInfo.email === this.state.email && userInfo.password === this.state.password) {
      this.props.navigation.navigate('homeScreen')
    } else {
      alert("Incorrect Email Address and/or Password")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Email Address"
          placeholderTextColor="black"
          onChangeText={(email => this.setState({email}) )}
          value={this.state.email}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={(password => this.setState({password}) )}
          value={this.state.password}
          secureTextEntry={true}
        />
        <View>
          <TouchableOpacity 
            style={styles.signInBtn} 
            onPress={this._onLogin}
            >
            <Text 
              style={styles.signInBtnText}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.signInBtn} 
            onPress={() => {this.props.navigation.navigate('mainLoginScreen')}}>
            <Text 
              style={styles.signInBtnText}>
                BACK TO MAIN MENU
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLoginPageView}>
          <TouchableOpacity
            style={styles.forgotpw} >
            <Text>Forgot Password</Text>
          </TouchableOpacity>  

          <TouchableOpacity
            style={styles.signUpBtn} 
            onPress={() => this.props.navigation.navigate('signUpScreen')}>
            <Text>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    input: {
      height: 50,
      borderColor: 'rgba(0,0,0,0.2)',
      borderRadius: 25,
      borderWidth: 0.5,
      marginVertical: 5,
      marginHorizontal: 20,
      paddingLeft: 10, 

    },
    signInBtn: {
      backgroundColor: 'white',
      height: 70,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
    }, 
    signInBtnText: {
      fontSize: 20,
      fontWeight: 'bold',
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: { width: 2, height: 2 },
    },
    bottomLoginPageView: {
      flexDirection: 'row',
      paddingLeft: 5,
      paddingRight: 5
    },
    bottomLoginPageBtns: {
      justifyContent: 'space-evenly',

    },
    forgotpw: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    signUpBtn: {
      justifyContent: 'flex-end'
    }
  });