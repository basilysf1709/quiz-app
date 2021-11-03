import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


const Title = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.textContainer}> 
                Random Quiz
            </Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        fontSize: 36,
        fontWeight: '600',
        color: '#3d947d'
    },
});