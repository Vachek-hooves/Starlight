import {useState, useEffect, useContext, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Starlight} from '../data/data';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  useEffect(() => {
    initStarlightData();
  }, []);

  const initStarlightData = async () => {
    try {
    } catch (error) {}
  };
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useAppContext(AppContext);
  if (!context) {
    console.error('Error ,  check you context');
  }
  return context;
};
