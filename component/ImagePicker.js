import { Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import OutlineBtn from './OutlineBtn';
import { styles } from './styles';
const ImagePicker = ({onTakeImage}) => {
  const [pickedImage, setPickedImage] = useState('');

  async function takePhoto() {
    const image = await launchCamera();
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri)// pass data from here to placeForm
  }

  async function openGallery() {
    const image = await launchImageLibrary();
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri)// pass data from here to placeForm
  }

  return (
    <>
      <View >
        <Text style={styles.titleTextStyle} > Put a Suitable Image * </Text>
        <View style={styles.imageAndMapPreviewContainer}>
          {pickedImage == '' ? (
            <Text style={styles.fallbackText}>No Image Taken Yet</Text>
          ) : (
            <Image
              source={{uri: pickedImage}}
              style={styles.imageAndMapPreview}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.btn_Container}>
          <OutlineBtn onPress={takePhoto} nameIcon="camera" title="Camera" />
          <OutlineBtn onPress={openGallery} nameIcon="images" title="Gallery" />
        </View>
      </View>
    </>
  );
};
export default ImagePicker;
