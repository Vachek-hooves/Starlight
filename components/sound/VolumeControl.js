import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';
import {toggleBackgroundMusic} from '../sound/setupPlayer';

const VolumeControl = () => {
  const playbackState = usePlaybackState();
  const isPlaying = playbackState === State.Playing;

  const handleToggleSound = async () => {
    await toggleBackgroundMusic();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleToggleSound}>
      <Image
        source={
          isPlaying
            ? require('../../assets/icon/volume.png')
            : require('../../assets/icon/volume.png')
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
  icon: {
    width: 50,
    height: 50,
    // resizeMode: 'contain',
  },
});

export default VolumeControl;
