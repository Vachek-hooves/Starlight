import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {MainLayout, WelcomeLayout} from '../components/layout';

const WelcomeScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
        duration: 1500,
      }),
    ]).start(() => {
      setTimeout(() => navigation.navigate('ChooseStarlight'), 1500);
    });
  }, [fadeAnim, scaleAnim]);

  return (
    <WelcomeLayout>
      <View style={styles.container}>
        <View style={styles.starsContainer}>
          {[...Array(150)].map((_, i) => (
            <View
              key={i}
              style={[
                styles.star,
                {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.contentContainer}>
          <Animated.View
            style={{opacity: fadeAnim, transform: [{scale: scaleAnim}]}}>
            <Text style={styles.title}>Starlight</Text>
            <Text style={styles.subtitle}>Constellation Quest</Text>
          </Animated.View>
        </View>
      </View>
    </WelcomeLayout>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f0c29',
  },
  starsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  star: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 32,
    color: '#e0e0e0',
    textAlign: 'center',
  },
});
