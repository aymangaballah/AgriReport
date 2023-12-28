import {Pressable, StyleSheet, Text,} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
const OutlineBtn = ({onPress, nameIcon, title}) => {
  return (
    <Pressable
      android_ripple={{color: Colors.White}}
      onPress={onPress}
      style={{
        width: RFValue(126),
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: Colors.SecondryColor,
        borderWidth: RFValue(2),
        alignItems: 'center',
        borderRadius: RFValue(10),
      }}>
      <Ionicons
        name={nameIcon}
        size={RFValue(22)}
        color={Colors.SecondryColor}
      />
      <Text
        style={{
          fontSize: RFValue(16),
          color: Colors.SecondryColor,
          marginLeft: RFValue(10),
          fontFamily: 'serif',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default OutlineBtn;

const styles = StyleSheet.create({});
