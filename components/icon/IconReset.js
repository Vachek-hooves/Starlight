import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const IconReset = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{

        bottom: 40,
        marginTop: 80,
        marginLeft: 30,
      }}>
      <Image
        source={require('../../assets/icon/reset.png')}
        style={{
          width: 50,
          height: 50,
          tintColor: '#ffffff',
          transform: [{rotate: '20deg'}],
          shadowColor: '#ffd700',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.8,
          shadowRadius: 4,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconReset;

const styles = StyleSheet.create({});
