import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {State} from 'react-native-track-player';

const Volume = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const setupAndPlayTrack = async () => {
      try {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack === null) {
          // Player is not set up, so we set it up
          await TrackPlayer.setupPlayer();
          await TrackPlayer.add({
            id: 'backgroundMusic',
            url: require('../../assets/sound/sound.mp3'), // Adjust the path as needed
            title: 'Background Music',
            artist: 'Your App',
          });
        }

        // Check the current state and play if it's not already playing
        const playerState = await TrackPlayer.getState();
        if (playerState !== State.Playing) {
          await TrackPlayer.play();
        }

        if (isMounted) {
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error setting up player:', error);
      }
    };

    setupAndPlayTrack();

    return () => {
      isMounted = false;
      // We don't destroy the player here, as it might be needed in other parts of the app
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
      <Text>SOUND</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
});

export default Volume;
