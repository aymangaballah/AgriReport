import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';
import {styles} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
const PlaceList = ({places,point}) => {
  if (!places || places.length === 0) {
    return (
      <>
        <View style={Style.fallbackContainer}>
          <Text style={styles.fallbackText}>No Report added Yet</Text>
        </View>
      </>
    );
  }
  return (
    <>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={places}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PlaceItem place={item}/>}
      />
    </>
  );
};

export default PlaceList;

const Style = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointContainer: {
    width: RFValue(100),
    height: RFValue(100),
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomLeftRadius: RFValue(12),
    borderBottomRightRadius: RFValue(12),
    marginBottom: RFValue(8),
    paddingVertical: RFValue(10),
  },
  point: {
    fontSize: RFValue(20),
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: "#3F3F3F",
  },
  pointsNumber: {
    fontSize: RFValue(17),
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
});
