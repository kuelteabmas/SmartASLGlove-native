import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

class Settings extends React.Component {
    render() {
        return(
            <View style={styles.main}>
                 
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.settingBtn} >
                            <Text style={styles.settingText}>
                                Profile Settings
                            </Text>
                    </TouchableOpacity>
                </View>
     
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.settingBtn} >
                            <Text style={styles.settingText}>
                                Pairing Settings
                            </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.settingOptionView}>
                    <TouchableOpacity 
                        style={styles.settingBtn} >
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