import TrackPlayer, { Capability, State } from 'react-native-track-player';

let isSetup = false;

export const setupPlayer = async () => {
  if (isSetup) return;

  try {
    await TrackPlayer.setupPlayer({
      stopWithApp: true, // This ensures the player stops when the app is terminated
    });
    
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

    isSetup = true;
    console.log('Track player set up successfully');
  } catch (error) {
    console.error('Error setting up player:', error);
  }
};

export const playBackgroundMusic = async () => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    const playerState = await TrackPlayer.getState();
    if (playerState !== State.Playing) {
      await TrackPlayer.play();
    }
  }
};

export const toggleBackgroundMusic = async () => {
  const state = await TrackPlayer.getState();
  if (state === State.Playing) {
    await TrackPlayer.pause();
  } else {
    await TrackPlayer.play();
  }
};

export const stopBackgroundMusic = async () => {
  await TrackPlayer.stop();
};