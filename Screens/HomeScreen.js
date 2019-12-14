import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

class HomeScreen extends React.Component {

<<<<<<< Updated upstream
=======
    static navigationOptions = {
        title: 'Home',
      };

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
>>>>>>> Stashed changes

    render() {
        return(
            <View style={styles.main}>                
                <TouchableOpacity
                        style={[ styles.button, {backgroundColor: 'orange'}]}
                        title='Translate Signs To Text/Voice'
<<<<<<< Updated upstream
=======
                        onPress={() => this.props.navigation.navigate('pairingSettingsScreen')}
>>>>>>> Stashed changes
                    >
                        <Text style={styles.textbutton}>Signs To Text</Text>
                </TouchableOpacity>

                <TouchableOpacity
                        style={[ styles.button, {backgroundColor: 'purple'}]}
                        title='Voice To Text'
                        onPress={() => this.props.navigation.navigate('voiceToTextScreen', { update: this.updateState })}
                    >
                        <Text style={[styles.textbutton, {color: 'white'}]}>Text To Speech</Text>
                </TouchableOpacity>
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
        fontSize: 30,
        fontWeight: 'bold',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
    },
});

export default HomeScreen;