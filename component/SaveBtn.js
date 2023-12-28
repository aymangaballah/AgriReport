import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SaveBtn = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: RFValue(70),
        height: RFValue(40),
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: Colors.SecondryColor,
        borderWidth: RFValue(2),
        alignItems: 'center',
        borderRadius: RFValue(10),
      }}>
      <Ionicons name="save" size={RFValue(24)} color={Colors.White} />
      <Text
        style={{
          fontSize: RFValue(18),
          color: Colors.White,
          marginLeft: RFValue(10),
          fontFamily:'serif'
        }}>
        Save
      </Text>
    </Pressable>
  );
};

export default SaveBtn;

const styles = StyleSheet.create({});
