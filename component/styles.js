import { StyleSheet } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
export const styles = StyleSheet.create({
    imageAndMapPreviewContainer: {
      width: '100%',
      height: RFValue(400),
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: RFValue(20),
      backgroundColor: "#ddd",
      borderRadius: RFValue(10),
      overflow:"hidden"

    },
    imageAndMapPreview: {
      width: '100%',
      height: '100%',
    },
    btn_Container: {
      flexDirection: 'row',
      width: '100%',
      height: RFValue(60),
      justifyContent: 'space-between',
    },
    fallbackText: {
      fontSize: RFValue(16),
      color: Colors.fallbackColor,
      fontWeight: 'bold',
      fontFamily:'serif'
    },
    titleTextStyle: {
      fontSize: RFValue(18),
      color:"#737373" ,
      marginTop: RFValue(20),
      marginVertical:RFValue(10),
      fontFamily: 'serif'
    }
  });