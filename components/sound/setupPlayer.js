import TrackPlayer, { Capability } from 'react-native-track-player';

export const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop,
      ],
    });

    await TrackPlayer.add({
      id: 'backgroundMusic',
      url: require('../../assets/sound/sound.mp3'),
      title: 'Background Music',
      artist: 'Your App',
    });

    await TrackPlayer.play();
    console.log('Track player set up and started playing successfully');
  } catch (error) {
    console.error('Error setting up player:', error);
  }
};

export const toggleBackgroundMusic = async () => {
  const state = await TrackPlayer.getState();
  if (state === TrackPlayer.STATE_PLAYING) {
    await TrackPlayer.pause();
  } else {
    await TrackPlayer.play();
  }
};