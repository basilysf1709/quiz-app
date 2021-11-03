import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Title />

            <View style={styles.imageContainer}> 
                <Image
                    source={
                        require('../assets/Island-amico.png')
                    }
                    style = {styles.banner}
                    resizeMode="contain"
                />
            </View> 

            <TouchableOpacity onPress= {()=>navigation.navigate("Quiz")} style={styles.button}> 
                <Text style={styles.buttonText}> Start </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    container: {
        paddingTop: 40,
        paddingVertical: 20,
        height: '100%'
    },
    button: {
        width: '100%',
        backgroundColor: '#56b39b',
        padding: 16,
        borderRadius: 32,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }
});

export default Home;