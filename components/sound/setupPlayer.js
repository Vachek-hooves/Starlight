import TrackPlayer from 'react-native-track-player';

export const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'backgroundMusic',
      url: require('../../assets/sound/sound.mp3'), // Adjust the path as needed
      title: 'Background Music',
      artist: 'Your App',
    });
    console.log('Track player set up successfully');
  } catch (error) {
    console.error('Error setting up player:', error);
  }
};
