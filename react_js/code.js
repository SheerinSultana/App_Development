import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image,ScrollView } from 'react-native';

const image = { uri: 'https://raw.githubusercontent.com/Sagedinnit/mobileapp1/main/bgImg%20(1).jpg' };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>LIGHT</Text>
        <Text style={styles.text1}>Darkness cannot drive</Text>
        <Text style={styles.text1}>out darkness: only</Text>
        <Text style={styles.text1}>light can do that. hate</Text>
        <Text style={styles.text1}>cannot drive out hate:</Text>
        <Text style={styles.text1}>only love can do that</Text>
        <Text style={styles.text2}>-Martin Luther Knig Jr.,</Text>
        <Text style={styles.text3}>A testament of Hope: The</Text>
        <Text style={styles.text3}>Essential Writings and Speeches</Text>
      
  
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    paddingLeft:30,
    paddingTop:200,
    paddingBottom:30,
  },
 text1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'Bahnschrift',
    paddingLeft:30,
  },
   text2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft:30,
    paddingTop:40,
  },
   text3: {
    color: 'white',
    fontSize: 25,
    paddingLeft:30,
  },
});
