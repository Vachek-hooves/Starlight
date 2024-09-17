import {useState, useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Starlight as initialStarlight} from '../data/data';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [starlightData, setStarlightData] = useState(initialStarlight);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    initStarlightData();
  }, []);

  const initStarlightData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('starlightData');
      const storedTotalScore = await AsyncStorage.getItem('totalScore');
      if (storedData) {
        setStarlightData(JSON.parse(storedData));
      } else {
        await AsyncStorage.setItem('starlightData', JSON.stringify(initialStarlight));
      }
      if (storedTotalScore) {
        setTotalScore(parseInt(storedTotalScore));
      } else {
        await AsyncStorage.setItem('totalScore', '0');
      }
    } catch (error) {
      console.error('Error initializing Starlight data:', error);
    }
  };

  const updateScore = async (id, newScore) => {
    try {
      const updatedData = starlightData.map(constellation =>
        constellation.id === id
          ? {...constellation, score: newScore.toString()}
          : constellation
      );
      setStarlightData(updatedData);
      await AsyncStorage.setItem('starlightData', JSON.stringify(updatedData));
      
      const newTotalScore = updatedData.reduce((sum, constellation) => sum + parseInt(constellation.score), 0);
      setTotalScore(newTotalScore);
      await AsyncStorage.setItem('totalScore', newTotalScore.toString());
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const unlockConstellation = async (id) => {
    if (totalScore < 60) {
      return false; // Not enough score to unlock
    }
    try {
      const updatedData = starlightData.map(constellation =>
        constellation.id === id
          ? {...constellation, isActive: true}
          : constellation
      );
      setStarlightData(updatedData);
      await AsyncStorage.setItem('starlightData', JSON.stringify(updatedData));
      
      const newTotalScore = totalScore - 60;
      setTotalScore(newTotalScore);
      await AsyncStorage.setItem('totalScore', newTotalScore.toString());
      return true; // Successfully unlocked
    } catch (error) {
      console.error('Error unlocking constellation:', error);
      return false;
    }
  };

  const value = {
    starlightData,
    updateScore,
    unlockConstellation,
    totalScore,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error('Error, check your context');
  }
  return context;
};
