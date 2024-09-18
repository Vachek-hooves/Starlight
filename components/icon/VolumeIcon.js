import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {usePlaybackState} from 'react-native-track-player';
import {toggleBackgroundMusic} from '../sound/setupPlayer';

const VolumeIcon = () => {
  const playbackState = usePlaybackState();
  const isPlaying = playbackState === 3; // 3 is the value for STATE_PLAYING

  const handleToggleSound = async () => {
    await toggleBackgroundMusic();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleToggleSound}>
      <Image
        source={
          isPlaying
            ? require('../../assets/icon/volume.png')
            : require('../../assets/icon/volume_down.png')
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default VolumeIcon;

const styles = StyleSheet.create({
    button: {
      padding: 5,
    },
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
  });
