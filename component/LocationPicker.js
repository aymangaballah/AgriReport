import {Alert, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {styles} from './styles';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  reverseGeocodeAsync,
} from 'expo-location';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

const LocationPicker = ({onPickLocation}) => {
  const [pickedLocation, setPickedLocation] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  //Get lat,Lng from map to another page with navigation
  const [coordsObj, setCoordsObj] = useState();
  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);

      // Alert.alert("well done")
    }
  }, [route, isFocused]);

  // pass data from here to placeForm

  //Location of user
  async function locationUser() {
    //premission
    const hasPremission = await verifyPremission();
    if (!hasPremission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    const address = await reverseGeocodeAsync(location.coords);
    setCoordsObj(address[0]);
    onPickLocation(coordsObj);
  }

  const pickOnMapLocation = () => {
    navigation.navigate('Map');
  };

  //Premission
  const [locationPremissionInformation, requestPremission] =
    useForegroundPermissions();
  async function callback() {
    const PermissionResponse = await requestPremission();
    return PermissionResponse.granted;
  }
  async function verifyPremission() {
    if (
      locationPremissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const PermissionResponse = await requestPremission();
      return PermissionResponse.granted;
    }
    if (locationPremissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        ' Premissions !!',
        'You need to grant Location Premission to use this app ',
        [
          {
            text: 'Cancel',
          },
          {
            text: 'OK',
            onPress: () => callback(),
          },
        ],
      );

      return false;
    }
    return true;
  }

  return (
    <View>
      <Text style={styles.titleTextStyle}> Put Your Location* </Text>
      <Pressable
        style={[
          styles.imageAndMapPreviewContainer,
          {height: RFValue(200)},
        ]}
        onPress={pickOnMapLocation}
        android_ripple={{color: '#464646'}}>
        <Image
          source={require('../image/Map.jpg')}
          style={styles.imageAndMapPreview}
        />
      </Pressable>
    </View>
  );
};

export default LocationPicker;

