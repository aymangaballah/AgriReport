import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  Pressable,
  AsyncStorage,
} from 'react-native';
import React, { useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from './Button';
import Comment from './Comment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
  reverseGeocodeAsync,
} from 'expo-location';
import {Place} from '../models/places';

const PlaceForm = ({onCreatePlace}) => {
  // textinput of headline
  const [enteredTitle, setEnteredTitle] = useState('');
  const changeInputHandler = enteredText => {
    setEnteredTitle(enteredText);
  };

  //to pass data from locationPicker and Image Picker and Comment to Place File
  const [takedImage, settakeImage] = useState();
  const [pickedLocation, SetpickedLocation] = useState();
  const [takenComment, setTakenComment] = useState('');
  //to pass data from  Image Picker to Place File
  const takeImageHandler = imageUri => {
    settakeImage(imageUri);
  };

  //can't happend any change so avoid un necessary checks
  const pickLocationHandler = (...location) => {
    SetpickedLocation(location);
    console.log(pickedLocation);
  };
  //to pass data from Comment to Place File
  const takeComment = comment => {
    setTakenComment(comment);
  };
  // pickedLocation have lat ,lng
  // const [pickedLocation, setPickedLocation] = useState('');

  //Get lat,Lng from map to another page with navigation
  const [coordsObj, setCoordsObj] = useState();

  //Location of user
  async function locationUser() {
    //premission
    const hasPremission = await verifyPremission();
    if (!hasPremission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    const address = await reverseGeocodeAsync(location.coords);
    setCoordsObj(address[0]);
    // console.log(location)
  }

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


  const savePlace = async () => {
    let places = await AsyncStorage.getItem('places');
    places = places == null ? [] : JSON.parse(places);

    const placeData = new Place(
      enteredTitle,
      takedImage,
      coordsObj,
      takenComment,
    );
    onCreatePlace(placeData);
    const newPlaces = [...places, placeData]
    setPlaces(newPlaces);
  };

  const setPlaces = async (newPlaces) => {
    await AsyncStorage.setItem('places', JSON.stringify(newPlaces));
  }

  return (
    <ScrollView style={Style.container}>
      <View>
        <TextInput
          style={Style.textInput}
          value={enteredTitle}
          onChangeText={changeInputHandler}
          multiline={true}
          placeholder=" Headline "
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />

      {/* Current Location Of user */}
      {coordsObj && (
        <View
          style={{
            width: '100%',
            minHeight: RFValue(40),
          }}>
          <Text
            style={{
              fontSize: RFValue(16),
              color: '#005A34',
              marginBottom: RFValue(10),
            }}>
            {coordsObj.city} - {coordsObj.subregion} - {coordsObj.region} -{' '}
            {coordsObj.country}
          </Text>
        </View>
      )}
      <Pressable
        onPress={locationUser}
        style={{
          width: RFValue(126),
          height: RFValue(60),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderColor: Colors.SecondryColor,
          borderWidth: RFValue(2),
          borderRadius: RFValue(10),
        }}>
        <Ionicons
          name="location"
          size={RFValue(24)}
          color={Colors.SecondryColor}
        />
        <Text
          style={{
            fontSize: RFValue(16),
            color: Colors.SecondryColor,
            marginLeft: RFValue(10),
            fontFamily: 'serif',
          }}>
          Current Location
        </Text>
      </Pressable>

      <Comment onTakeComment={takeComment} />
      <Button onPress={savePlace} title=" Submit" />
    </ScrollView>
  );
};

export default PlaceForm;

const Style = StyleSheet.create({
  container: {
    padding: RFValue(20),
  },
  titleTextStyle: {
    fontSize: RFValue(20),
    color: '#595959',
    marginLeft: RFValue(3),
  },
  textInput: {
    width: '100%',
    borderRadius: RFValue(10),
    backgroundColor: '#ddd',
    paddingLeft: RFValue(10),

    fontSize: RFValue(18),
    color: Colors.Black,
    height: RFValue(45),
    fontFamily: 'serif',
  },
});
