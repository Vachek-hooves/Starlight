import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {toggleBackgroundMusic} from '../sound/setupPlayer';

const Volume = () => {
  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying)

  useEffect(() => {
    setIsPlaying(playbackState === TrackPlayer.STATE_PLAYING);
  }, [playbackState]);

  const handleToggleSound = async () => {
    await toggleBackgroundMusic();
  };

  return (
    // <TouchableOpacity style={styles.button} onPress={handleToggleSound}>
    //   <Image
    //     source={
    //         isPlaying
    //           ? require('../../assets/icon/volume.png')
    //           : require('../../assets/icon/volume_down.png')
    //     //   isPlaying ? <Text>ON</Text> : <Text>OFF</Text>
    //     }
    //     style={{width: 40, height: 40}}
    //   />
    // </TouchableOpacity>
    <></>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default Volume;
