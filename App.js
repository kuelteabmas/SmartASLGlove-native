import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Icon
} from 'react-native';

// Import Screens
import MainLoginScreen from './Screens/MainLogin';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import Home from './Screens/HomeScreen';
import Settings from './Screens/SettingsScreen'
import SignTranslation from './Screens/SignsTranslationScreen' 
// import HomeScreen from './Screens/HomeScreen';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createBottomTabNavigator } from 'react-navigation-tabs';


// *** React Navigation Routing ***
// ** Home Tab Navigation
// const HomeTabNavigator = createBottomTabNavigator({
//   Home,
//   Settings
// },
// {
//   navigationOptions: ({ navigation }) => {

//     // below constant will fetch the name of the current tab
//     const { routeName } = navigation.state.routes[navigation.state.index]
//     return {
//       headerTitle: <Text style={styles.screenTitle}>{routeName}</Text>,
//     }
//   }  
// })

const HomeStackNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingsSCreen: { screen: Settings },

},
// {
//   defaultNavigationOptions: ({ navigation }) => {
//     return{
//       headerLeft: <Icon style={ {paddingLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30}/>
//     }
//   }
// }
)


// AppDrawer for the side swipe drawer component
// const AppDrawerNavigator = createDrawerNavigator({
//   Home: { screen: HomeStackNavigator,
//     navigationOptions: {
//       tabBarIcon: ({tintColor}) => {
//         <Icon name="ios-home" color={tintColor} size={25}/>  
//       }
//     }
//   },
//   Settings: { screen: HomeStackNavigator }
// })

// Switching between screens Navigation
const AppSwitchNavigator = createSwitchNavigator({
  mainLoginScreen: { screen: MainLoginScreen },
  loginScreen: { screen: LoginScreen },
  signUpScreen: { screen: SignUpScreen },
  homeScreen: { screen: HomeStackNavigator},
  settingsScreen: { screen: Settings},
  signTranslationScreen : { screen: SignTranslation}
})

const AppContainer = createAppContainer(AppSwitchNavigator)
class App extends React.Component {
  constructor() { 
    super()
    this.state = {
      isReady: false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/soundbg.jpeg'),
    ]);

    await Promise.all([...imageAssets]);
  }
  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadAssetsAsync}
    //       onFinish={() => this.setState({ isReady: true })}
    //       onError={console.warn}
    //     />
    //   );
    // }

    return (
      <AppContainer />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default App;
