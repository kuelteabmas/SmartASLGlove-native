import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5'

// Import Screens
import MainLoginScreen from './Screens/MainLogin';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import Home from './Screens/HomeScreen';
import Settings from './Screens/SettingsScreen'
<<<<<<< Updated upstream
=======
// import SignTranslation from './Screens/SignsTranslationScreen' 
// import SignToTextScreen from './Screens/SignToTextScreen' 
// import PairingSettingsScreen from './Screens/PairingSettingsScreen' 
// import PairingSettingsScreen from './components/btserial' 
import { PairingSettingsComp } from './components/btserial'
// import { MessageTextComp } from './components/btserial'
import SignToTextScreenComp from './components/btserialMessage'

// import PairingSettingsComp from './components/btserial'

// import { PairingSettingsComp } from '../components/btserial'
// import VoiceToText from './Screens/VoiceToText'
>>>>>>> Stashed changes
// import HomeScreen from './Screens/HomeScreen';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
<<<<<<< Updated upstream
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// class App extends React.Component {
//   render() {
//     return(
//       <MainLoginScreen />
//     )
//   }
// };
=======
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SignToTextScreen from './Screens/SignToTextScreen';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
>>>>>>> Stashed changes


// *** React Navigation Routing ***
// ** Home Tab Navigation
const HomeTabNavigator = createBottomTabNavigator({
  Home,
  Settings
},
{
  navigationOptions: ({ navigation }) => {

<<<<<<< Updated upstream
    // below constant will fetch the name of the current tab
    const { routeName } = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: <Text style={styles.screenTitle}>{routeName}</Text>,
    }
  }  
})

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator: HomeTabNavigator,
  SettingsScreen: HomeTabNavigator
=======
// ********* WORKING ONE!!!! */
const HomeTabNavigator = createMaterialBottomTabNavigator({
  Home,
  Settings
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index] // get active index of the selected tab
      return {
        headerTitle: routeName
      }
    }
})

// const SettingsTabNavigator = createMaterialBottomTabNavigator({
//   Home,
//   Settings
// },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index] // get active index of the selected tab
//       return {
//         headerTitle: routeName
//       }
//     }
// })

const SettingsStackNavigator = createStackNavigator({
  // PairingSettingsComp
  pairingSettingsScreen: { screen: PairingSettingsComp}
// },{
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index] // get active index of the selected tab
//       return {
//         headerTitle: routeName
//       }
//     }
})

const HomeStackNavigator = createStackNavigator({
  HomeScreen: { 
    screen: HomeTabNavigator
},
  signToTextScreen: { screen: SignToTextScreenComp}, 
  pairingSettingsScreen: { screen: PairingSettingsComp}, 
>>>>>>> Stashed changes
},
{
  defaultNavigationOptions: ({ navigation }) => {
    return{
      headerLeft: <Icon style={ {paddingLeft: 10}} onPress={() => navigation.openDrawer() } name="md-menu" size={30}/>
    }
  }
}
)


// AppDrawer for the side swipe drawer component
const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStackNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        <Icon name="ios-home" color={tintColor} size={25}/>  
      }
    }
  },
  Settings: { screen: HomeStackNavigator }
})

// Switching between screens Navigation
const AppSwitchNavigator = createSwitchNavigator({
  mainLoginScreen: { screen: MainLoginScreen },
  loginScreen: { screen: LoginScreen },
  signUpScreen: { screen: SignUpScreen },
<<<<<<< Updated upstream
  homeScreen: { screen: AppDrawerNavigator},
  settingsScreen: { screen: Settings}
=======
  homeScreen: { screen: HomeStackNavigator},
  // settingsScreen: { screen: Settings},
  settingsScreen: { screen: SettingsStackNavigator},
  // signToTextScreen: { screen: SignToTextScreen},
  signToTextScreen: { screen: SignToTextScreenComp},

  // pairingSettingsScreen: {screen: PairingSettingsComp}  
  // voiceToTextScreen : { screen: VoiceToText}
>>>>>>> Stashed changes
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
