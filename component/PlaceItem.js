import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const PlaceItem = ({place}) => {
  const navigation = useNavigation();
  const onSelect = () => {
    navigation.navigate('placeDetails',{
      place:place
    });
  };
  return (
    <Pressable onPress={onSelect} style={styles.container}>
      {place.imageUri ? (
        <Image source={{uri: place.imageUri}} style={styles.image} />
      ) : (
        <View
          style={[
            styles.image,
            {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#EBEBEB',
            },
          ]}>
          <Text style={styles.title}>No Image</Text>
        </View>
      )}

      <View style={styles.subContainer}>
        <View
          style={{
            height: RFValue(30),
            marginBottom: RFValue(4),
          }}>
          {place.title ? (
            <Text
              style={[styles.title, {color: Colors.fallbackColor, fontWeight: 'bold'}]}>
              {place.title}
            </Text>
          ) : (
            <Text style={[styles.title, {color: Colors.fallbackColor, fontWeight: 'bold'}]}>No Title</Text>
          )}
        </View>
        <View style={{minHeight: RFValue(30), marginBottom: RFValue(8)}}>
          {place.location ? (
            <>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: 'serif',
                  fontWeight: 'bold',
                }}>
                {place.location.city}, {place.location.subregion} ,{' '}
                {place.location.region}, {place.location.country}
              </Text>
            </>
          ) : (
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: 'serif',
                fontWeight: 'bold',
              }}>
              No Picked Location
            </Text>
          )}
        </View>
        <View style={{maxHeight: RFValue(40)}}>
          {place.comment ? (
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'serif',
              }}>
              {place.comment}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: 'serif',
              }}>
              No Comment
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};
export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: RFValue(130),
    alignSelf: 'center',
    marginTop: RFValue(10),
    flexDirection: 'row',
    elevation: RFValue(0.6),
    borderColor: '#ddd',
    borderWidth: RFValue(1.5),
    borderRadius: RFValue(3),
    overflow: 'hidden',
    paddingLeft: RFValue(6),
  },
  image: {
    width: RFValue(120),
    height: '90%',
    alignSelf: 'center',
  },
  subContainer: {
    flex: 1,
    paddingVertical: RFValue(10),
    paddingLeft: RFValue(8),
    paddingRight: RFValue(2),
  },
  title: {
    fontSize: RFValue(18),
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
});
