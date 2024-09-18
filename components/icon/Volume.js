import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {playBackgroundMusic} from '../sound/setupPlayer';

const Volume = () => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);

  useEffect(() => {
    const updatePlayingState = async () => {
      if (playbackState === State.Playing) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    updatePlayingState();
  }, [playbackState]);

  useEffect(() => {
    playBackgroundMusic();
  }, []);

  const toggleSound = async () => {
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Error toggling sound:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleSound}>
      <Image
        source={
          isPlaying
            ? require('../../assets/icon/volume.png')
            : require('../../assets/icon/volume-down.png')
        }
        style={{width: 40, height: 40}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default Volume;
