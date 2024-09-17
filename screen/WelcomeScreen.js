import {Animated, StyleSheet, Text, View} from 'react-native';
import {useRef, useEffect} from 'react';
import {MainLayout} from '../components/layout';

const WelcomeScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.navigate('MainScreen'));

  }, [animation]);

  return <MainLayout></MainLayout>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
