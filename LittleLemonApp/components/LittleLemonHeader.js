import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Little Lemon Restaurant
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2, 
        backgroundColor: '#f4ce14',
    },
    headerText: {
        fontSize: 44, 
        textAlign: 'center', 
        marginTop: StatusBar.currentHeight || 0,
        paddingTop: 5,
        color: 'black',
    }
})