import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Volume = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/icon/volume.png')}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'flex-end',
          marginHorizontal: 40,
          marginTop: 30,
        }}
      />
    </TouchableOpacity>
  );
};

export default Volume;

const styles = StyleSheet.create({});
