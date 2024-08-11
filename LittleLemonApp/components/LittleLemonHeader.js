import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        fontSize: 40, 
        textAlign: 'center', 
        paddingTop: 32, 
        color: 'black',
    }
})