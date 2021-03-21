
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, _ScrollView } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      
      flexDirection: "column"
    }]}>
            <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }} >
      
    <Image source={{uri: 'https://github.com/Sagedinnit/mobileapp1/blob/main/React-native-logo%20(1).png?raw=true'}}
       style={{width: 100, height: 100}} /></View><Text style={{backgroundColor:'black', color:'white',textAlign: "center",fontSize:20}}>{'Message'}
       </Text>
<Text style={{backgroundColor:'black', color:'white',textAlignVertical: "center",textAlign: "center",fontSize:20}}>{'Message'}</Text>

      <View style={{ flex: 2, backgroundColor: "lightgray",  }}>
             <View style={{ flex: 2, backgroundColor: "lightgray", alignItems: "left",}} >

 <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://raw.githubusercontent.com/Sagedinnit/mobileapp1/main/ios%20(1).png',
              }} style={{width: 125, height: 125}}
            />
       
        </View>
        <View style={styles.column}>

            <Image
              style={styles.image}
              source={{
                uri:
                  'https://raw.githubusercontent.com/Sagedinnit/mobileapp1/main/Android-Logo%20(3).png',
              }} style={{width: 125, height: 125}}
            />
        
        </View>
      </View>
    </View>

        </View><Text style={{backgroundColor:'gray', color:'white',textAlignVertical: "center",textAlign: "center",fontSize:20}}>{'Message'}</Text>
        <Text style={{backgroundColor:'gray', color:'white',textAlign: "center",fontSize:20}}>{'Message'}</Text>
        <Text style={{backgroundColor:'gray', color:'white',textAlign: "center",fontSize:20}}>{'Message'}</Text>
        <Text style={{backgroundColor:'gray', color:'white',textAlign: "center",fontSize:20}}>{'Message'}</Text>
        <Text style={{backgroundColor:'gray', color:'white',textAlign: "center",fontSize:20}}>{'Message'}</Text>
        <Text style={{backgroundColor:'gray', color:'white',textAlign: "center",fontSize:20}}>{'Message'}</Text>
      
      </View >
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'left',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'contain',
  },
  textCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
});

export default Flex;
