import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';

const Button = ({onPress, title}) => {
  return (
    <Pressable style={styles.btn} onPress={onPress} android_ripple={{color:"#fff"}}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(20),
    color: Colors.White,
    fontWeight:"bold",
    fontFamily:'serif'
  },
  btn: {
    width: '100%',
    height: RFValue(60),
    backgroundColor: Colors.SecondryColor,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:RFValue(10),
    marginTop:RFValue(20),
    marginBottom:RFValue(60),
    overflow:"hidden"
},
});
