import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlaceForm from '../component/PlaceForm';
function AddPlaces({navigation}) {
  const [keyPoint, setKeyPoint] = useState(0);
  async function add(place) {
    if (place?.imageUri && place?.location) {
      await setKeyPoint(keyPoint + 100);
    }
  }

  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    setCount();
  }, [keyPoint]);

  const setCount = async () => {
    await AsyncStorage.setItem('count', JSON.stringify(keyPoint));
  };

  const getCount = async () => {
    let count = await AsyncStorage.getItem('count');
    count = count == null ? 0 : JSON.parse(count);

    setKeyPoint(count);
  };

  async function craetePlaceHandler(place) {
    add(place).then(() => {
      navigation.navigate('AllPlaces', {
        place: place,
        // count: keyPoint,
      });
    });
  }
  return <PlaceForm onCreatePlace={craetePlaceHandler} />;
}

export default AddPlaces;

const styles = StyleSheet.create({});
