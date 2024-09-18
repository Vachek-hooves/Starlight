import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {State} from 'react-native-track-player';

const Volume = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const startPlayback = async () => {
      try {
        const state = await TrackPlayer.getState();
        if (state !== State.Playing) {
          await TrackPlayer.play();
        }
        if (isMounted) {
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error starting playback:', error);
      }
    };

    startPlayback();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleSound = async () => {
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling sound:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleSound}>
      {/* <Icon
        name={isPlaying ? 'volume-high' : 'volume-mute'}
        size={24}
        color="white"
      /> */}
      <Image
        source={require('../../assets/icon/volume.png')}
        style={{width: 40, height: 40}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default Volume;
