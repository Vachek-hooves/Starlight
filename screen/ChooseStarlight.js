import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MainLayout} from '../components/layout';
import {Starlight} from '../data/data';

const ChooseStarlight = ({navigation}) => {
  function navigateTo(id) {
    console.log(id);
    navigation.navigate('MainScreen', {constellationId: id});
  }
  return (
    <MainLayout>
      <SafeAreaView
        style={{
          //   justifyContent: 'center',
          flex: 1,
          //   alignItems: 'center',
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{width: '100%', alignItems: 'center'}}>
          {Starlight.map((star, i) => {
            return (
              <TouchableOpacity
                onPress={() => navigateTo(star.id)}
                key={i}
                style={styles.button}>
                <Text style={styles.text}>{star.name}</Text>
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
  text: {
    fontSize: 28,
    letterSpacing: 2,
    color: '#fff',
    fontWeight: '900',
  },
});
