import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const Result = ({navigation}) => {
    return (
        <View style={styles.container}> 
          <View> 
             <Text> Result </Text>
          </View>
          <View style={styles.bannerContainer}> 
              <Image 
                source={
                    require('../assets/c_prog_1.jpg')
                }
                style={styles.banner}
                resizeMode="cover"
              /> 
          </View>
          <View> 
              <TouchableOpacity onPress={()=>navigation.navigate("Home")}> 
                  <Text> Home </Text> 
              </TouchableOpacity>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    banner: {
        height: 300, 
        width: 300
    },
});

export default Result;