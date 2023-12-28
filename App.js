import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading, {AppLoadingProps} from 'expo-app-loading';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlaces';
import {Colors} from './constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconButtom from './component/IconButtom';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from './screens/Map';
import BackArrow from './component/BackArrow';
import {init} from './utility/database';
import PlaceDetails from './screens/PlaceDetails';
const Stack = createNativeStackNavigator();
const App = () => {
  // const [dbintilized, seDbIntlized] = useState(false);
  // useEffect(() => {
  //   init()
  //     .then(() => {
  //       seDbIntlized(true);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // if (!dbintilized) {
  //   <AppLoading />;
  // }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.SecondryColor},
            contentStyle: {backgroundColor: Colors.White},
            headerTitleStyle: {color: Colors.White,fontFamily:'serif'},
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'My Reports',

              headerRight: () => (
                <IconButtom
                  icon="add"
                  size={RFValue(30)}
                  color={Colors.White}
                  onPress={() => navigation.navigate('AddPlaces')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={({navigation}) => ({
              title: 'Add New Report',
              headerLeft: () => (
                <BackArrow
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={({navigation}) => ({
              title: 'Pick On Map',
              headerLeft: () => (
                <BackArrow
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="placeDetails"
            component={PlaceDetails}
            options={({navigation}) => ({
              title: 'Report Detail',
              headerLeft: () => (
                <BackArrow
                  onPress={() => {
                    navigation.navigate("AllPlaces");
                  }}
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
