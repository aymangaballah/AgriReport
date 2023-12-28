import { StyleSheet,Pressable } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '../constants/colors'
const IconButtom = ({icon,color,size,onPress}) => {
  return (
    <Pressable android_ripple={{color:Colors.White}} style={styles.btnContainer} onPress={onPress} >
        <Ionicons  name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default IconButtom

const styles = StyleSheet.create({
    btnContainer:{
        margin:RFValue(7),
        alignItems:'center',
        justifyContent:'center',
    }
})