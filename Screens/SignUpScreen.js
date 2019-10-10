import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '', 
      password: '',
      confirmPassword: ''
    }
  }

  _onSignUp = async () => {
    console.log("Sign Up Button pressed")
    if (this.state.firstName === '' || 
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.email === '' ||
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.confirmPassword === '') {
      alert("Please fill in the boxes");
    } else {
      this.props.navigation.navigate('homeScreen')
    }
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SIGN UP</Text>
        <TextInput 
          style={styles.input} 
          placeholder="First Name"
          onChangeText={(firstName => this.setState({firstName}) )}
          value={this.state.firstName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Last Name"
          onChangeText={(lastName => this.setState({lastName}) )}
          value={this.state.lastName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email Address"
          onChangeText={(email => this.setState({email}) )}
          value={this.state.email}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Username"
          onChangeText={(username => this.setState({username}) )}
          value={this.state.username}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password"
          onChangeText={(password => this.setState({password}) )}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password"
          onChangeText={(confirmPassword => this.setState({confirmPassword}) )}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <View>
        <TouchableOpacity 
          style={styles.signUpBtn} 
          onPress={this._onSignUp}>
          <Text 
            style={styles.signUpBtnText}>
              SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.signUpBtn} 
          onPress={() => this.props.navigation.navigate('mainLoginScreen')}>
          <Text 
            style={styles.signUpBtnText}>
              BACK TO MAIN MENU
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#1178F2',
      margin: 15,
      height: 40,
      padding: 5,
      fontSize: 16
    },
    submitBtn: {
      flexDirection: 'row',
      backgroundColor: '#1178F2',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 36,
      padding: 15
    }, 
    submitBtnText: {
      color: '#FFF',
      fontWeight: '700'
    },
    signUpBtn: {
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      // shadowColor: 'black',
      // shadowOpacity: 1,
      // shadowOffset: { width: 5, height: 5 },
    }, 
    signUpBtnText: {
      fontSize: 20,
      fontWeight: 'bold',
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: { width: 2, height: 2 },
    },
  });