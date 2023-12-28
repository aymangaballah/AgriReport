// import {Alert, StyleSheet, } from 'react-native';
// import React, {useCallback, useLayoutEffect, useState} from 'react';
// // import MapView, {Marker} from 'react-native-maps';
// import SaveBtn from '../component/SaveBtn';
// const Map = ({navigation}) => {
//   const [selectedLocation, setSelectedLocation] = useState();
//   //make marker and select lat,lng
//   const selectLocationFun = event => {
//     const lat = event.nativeEvent.coordinate.latitude;
//     const lng = event.nativeEvent.coordinate.longitude;
//     // console.log(event)
//     setSelectedLocation({lat: lat, lng: lng});
//   };

//   const savePickedLocation = useCallback(() => {
//     if (!selectedLocation) {
//       Alert.alert('Warning', 'No location Picked!!');
//       return;
//     }
//     navigation.navigate('AddPlaces', {
//       pickedLat: selectedLocation.lat,
//       pickedLng: selectedLocation.lng,
//     });
//   }, [navigation, selectedLocation]);


//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <SaveBtn
//           onPress={savePickedLocation}
//         />
//       ),
//     });
//   }, [navigation, savePickedLocation]);
//   const region = {
//     latitude: 30.033333,
//     longitude: 31.233334,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };
//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={region}
//       onPress={selectLocationFun}>
//       {selectedLocation && (
//         <Marker
//           coordinate={{
//             latitude: selectedLocation.lat,
//             longitude: selectedLocation.lng,
//           }}
//         />
//       )}
//     </MapView>
//   );
// };

// export default Map;

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//   },
// });
