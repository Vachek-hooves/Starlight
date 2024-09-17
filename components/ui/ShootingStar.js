import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ShootingStar = ({ onAnimationEnd = () => {} }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: width,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(translateY, {
        toValue: height,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.cubic,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start(onAnimationEnd);
  }, []);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          transform: [{ translateX }, { translateY }],
          opacity,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  star: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default ShootingStar;