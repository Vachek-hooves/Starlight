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
        style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={navigateTo}>
          <Text>Open Starlight</Text>
        </TouchableOpacity>
        <ScrollView>
          {Starlight.map((star, i) => {
            return (
              <TouchableOpacity
                onPress={() => navigateTo(star.id)}
                key={i}
                style={{padding: 20, borderWidth: 2, marginVertical: 10}}>
                <Text>{star.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </MainLayout>
  );
};

export default ChooseStarlight;

const styles = StyleSheet.create({});
