import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';

const PlaceDetails = () => {
  const route = useRoute();
  const place = route.params.place;
  return (
    <ScrollView>
      <View
        style={{
          minHeight: RFValue(60),
          marginTop: RFValue(20),
        }}>
        {place.title ? (
          <Text style={styles.title}>{place.title}</Text>
        ) : (
          <Text style={styles.title}>No Title</Text>
        )}
      </View>
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
          <Text
            style={{
              fontSize: RFValue(16),
              color: Colors.fallbackColor,
              fontWeight: 'bold',
              fontFamily: 'serif',
            }}>
            No Image
          </Text>
        </View>
      )}
      <Text style={[styles.title,{marginTop:RFValue(40)}]}>Location</Text>
      <View
        style={{
          minHeight: RFValue(30),
          marginTop: RFValue(17),
          alignSelf: 'center',
          width: '90%',
          marginLeft: RFValue(15),
        }}>
        {place.location ? (
          <>
            <Text style={styles.location}>
              {place.location.city}, {place.location.subregion} ,{' '}
              {place.location.region}, {place.location.country}
            </Text>
          </>
        ) : (
          <Text style={styles.location}>No Picked Location</Text>
        )}
      </View>
      <Text style={[styles.title,{marginTop:RFValue(40)}]}>Comment</Text>
      <View style={styles.comment}>
        {place.comment ? (
          <Text
            style={styles.commentText}>
            {place.comment}
          </Text>
        ) : (
          <Text
            style={styles.commentText}>
            No Comment
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  title: {
    color: Colors.fallbackColor,
    fontWeight: 'bold',
    fontSize: RFValue(20),
    fontFamily: 'serif',
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    height: RFValue(450),
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: RFValue(3),
    borderRadius: RFValue(10),
  },
  location: {
    fontSize: RFValue(16),
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  comment: {
    width: '90%',
    minHeight: 90,
    marginBottom: RFValue(130),
    alignSelf: 'center',
    marginLeft: RFValue(15),
  },
  commentText:{
    fontSize: RFValue(16),
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginTop:RFValue(15)
  }
});
