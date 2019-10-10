import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

class HomeScreen extends React.Component {


    render() {
        return(
            <View style={styles.main}>                
                <TouchableOpacity
                        style={[ styles.button, {backgroundColor: 'orange'}]}
                        title='Translate Signs To Text/Voice'
                    >
                        <Text style={styles.textbutton}>Translate Signs To Text/Voice</Text>
                </TouchableOpacity>

                <TouchableOpacity
                        style={[ styles.button, {backgroundColor: 'purple'}]}
                        title='Voice To Text'
                    >
                        <Text style={[styles.textbutton, {color: 'white'}]}>Voice To Text</Text>
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
});

export default HomeScreen;