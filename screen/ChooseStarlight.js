import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainLayout } from '../components/layout';
import { useAppContext } from '../store/context';

const ChooseStarlight = ({ navigation }) => {
  const { starlightData } = useAppContext();

  function navigateTo(id) {
    console.log(id);
    navigation.navigate('MainScreen', { constellationId: id });
  }

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {starlightData.map((star, i) => {
            return (
              <TouchableOpacity
                onPress={() => star.isActive && navigateTo(star.id)}
                key={i}
                style={[
                  styles.button,
                  !star.isActive && styles.inactiveButton,
                ]}
                disabled={!star.isActive}
              >
                <Text
                  style={[
                    styles.text,
                    !star.isActive && styles.inactiveText,
                  ]}
                >
                  {star.name}
                </Text>
                {star.score !== '0' && (
                  <Text style={styles.scoreText}>Score: {star.score}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </MainLayout>
  );
};

export default ChooseStarlight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    borderWidth: 2,
    marginVertical: 25,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  inactiveButton: {
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    borderColor: 'rgba(100, 100, 100, 0.6)',
  },
  text: {
    fontSize: 28,
    letterSpacing: 2,
    color: '#fff',
    fontWeight: '900',
  },
  inactiveText: {
    color: 'rgba(200, 200, 200, 0.5)',
  },
  scoreText: {
    fontSize: 18,
    color: '#ffd700',
    marginTop: 5,
  },
});
