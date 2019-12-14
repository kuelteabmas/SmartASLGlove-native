import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, BackHandler } from 'react-native';
import PairingSettingsComp from '../components/btserial'

class Settings extends React.Component {

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
            <View style={styles.main}>
                <Text style={styles.settingSubListTitle1}>
                    General
                </Text>
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.settingBtn} 
                        >
                            <Text style={styles.subSettingBtn}>
                                Profile Settings
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.settingBtn} 
                        onPress={() => this.props.navigation.navigate('pairingSettingsScreen')}
                        >
                            <Text style={styles.subSettingBtn}>
                                Pairing Settings
                            </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.subSettingBtn} >
                            <Text style={styles.settingText}>
                                Check for Updates
                            </Text>
                    </TouchableOpacity>
                </View>
               
                <Text style={styles.settingSubListTitle}>
                    Support
                </Text>
                
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.subSettingBtn} >
                            <Text style={styles.settingText}>
                                Privacy Policy
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.subSettingBtn} > 
                            <Text style={styles.settingText}>
                                Report a problem
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.settingLogout}>
                    <TouchableOpacity 
                        style={styles.settingBtn} 
                        onPress={() => this.props.navigation.navigate('mainLoginScreen')}> 
                            <Text style={[styles.settingText, { fontWeight: 'bold' }]}>
                                Log Out
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start'
    },
    settingBtn:{
        height: 40,
        justifyContent: 'center',
    }, 
    settingSubListTitle: {
        paddingTop: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        justifyContent: 'center',
    }, 
    settingSubListTitle1: {
        paddingTop: 0,
        marginBottom:10,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        justifyContent: 'center',
    }, 
    subSettingBtn: {
        paddingLeft: 20,
        height: 40,
        justifyContent: 'center',
    },
    settingOptionView: {
        borderBottomWidth: 0.5,
        borderColor: 'grey',
    },
    settingLogout: {
        marginTop: 70,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
    }
});

export default Settings;