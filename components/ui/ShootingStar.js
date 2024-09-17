import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ShootingStar = ({ startX, startY, endX, endY, duration = 1500 }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: endX - startX,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(translateY, {
        toValue: endY - startY,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration * 0.2,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: duration * 0.8,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          transform: [
            { translateX },
            { translateY },
          ],
          opacity,
          left: startX,
          top: startY,
        },
      ]}
    />
  );
};

const ContinuousShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        startX: Math.random() * width,
        startY: -10, // Start slightly above the screen
        endX: Math.random() * width,
        endY: height + 10, // End slightly below the screen
        duration: 3000 + Math.random() * 2000,
      };
      setStars(prevStars => [...prevStars, newStar]);
    }, 2000); // Create a new star every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stars.length > 10) {
      // Remove old stars to prevent too many from accumulating
      setStars(prevStars => prevStars.slice(1));
    }
  }, [stars]);

  return (
    <View style={StyleSheet.absoluteFill}>
      {stars.map(star => (
        <ShootingStar key={star.id} {...star} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#fff',
    position: 'absolute',
    shadowColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
});

export { ContinuousShootingStars };