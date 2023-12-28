import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlaceList from '../component/PlaceList';
import {useIsFocused} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
const AllPlaces = ({route}) => {
  const [loadedPlaces, seLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  const [keyCount, setKeyCount] = useState(0);
  useEffect(() => {
    if (isFocused) {
      getPlaces();
      const getCount = async () => {
        let count = await AsyncStorage.getItem('count');
        count = count == null ? 0 : JSON.parse(count);
  
        console.log(count);
        setKeyCount(count);
      };
  
      getCount();
    }

  }, [isFocused]);

  const getPlaces = async () => {
    let places = await AsyncStorage.getItem('places');
    places = places == null ? [] : JSON.parse(places);

    seLoadedPlaces(places);
  }

  return (
    <>
      <View style={styles.pointContainer}>
        <Text style={styles.point}>Points</Text>
        <Text style={styles.pointsNumber}>{keyCount}</Text>
      </View>
      <PlaceList places={loadedPlaces} />
    </>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  pointContainer: {
    width: RFValue(100),
    height: RFValue(100),
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomLeftRadius: RFValue(12),
    borderBottomRightRadius: RFValue(12),
    marginBottom: RFValue(10),
    paddingVertical: RFValue(10),
  },
  point: {
    fontSize: RFValue(22),
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#3F3F3F',
  },
  pointsNumber: {
    fontSize: RFValue(20),
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
});
