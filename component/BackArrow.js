import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '../constants/colors'
import Ionicons from "react-native-vector-icons/Ionicons"
const BackArrow = ({onPress}) => {
  return (
    <Pressable
    style={{width: RFValue(50)}}
    onPress={onPress}>
    <Ionicons
      name="arrow-back"
      size={RFValue(30)}
      color={Colors.White}
    />
  </Pressable>
  )
}

export default BackArrow

const styles = StyleSheet.create({})