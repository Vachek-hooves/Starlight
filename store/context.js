import {useState, useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Starlight as initialStarlight} from '../data/data';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [starlightData, setStarlightData] = useState(initialStarlight);
  console.log(starlightData[0]);

  useEffect(() => {
    initStarlightData();
  }, []);

  const initStarlightData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('starlightData');
      if (storedData) {
        setStarlightData(JSON.parse(storedData));
      } else {
        await AsyncStorage.setItem(
          'starlightData',
          JSON.stringify(initialStarlight),
        );
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
          : constellation,
      );
      setStarlightData(updatedData);
      await AsyncStorage.setItem('starlightData', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const value = {
    starlightData,
    updateScore,
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
