import {StyleSheet, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/colors';
import {styles} from './styles';
const Comment = ({onTakeComment}) => {
  const [CommentValue, setCommentValue] = useState('');
  const TakeComment = enteredText => {
    setCommentValue(enteredText);
    onTakeComment(enteredText);
  };
  return (
    <>
      <Text style={[styles.titleTextStyle, {marginLeft: RFValue(3)}]}>
        Description{' '}
        <Text
          style={{
            fontSize: RFValue(11),
            color: '#595959',
            fontFamily: 'serif',
          }}>
          Optional
        </Text>
      </Text>
      <TextInput
        onChangeText={TakeComment}
        value={CommentValue}
        style={styleshere.textInput}
        multiline={true}
      />
    </>
  );
};

export default Comment;

const styleshere = StyleSheet.create({
  textInput: {
    width: '100%',
    borderRadius: RFValue(10),
    backgroundColor: '#ddd',
    marginTop: RFValue(7),
    fontSize: RFValue(18),
    color: Colors.Black,
    minHeight: RFValue(45),
    paddingLeft: RFValue(10),
  },
});
