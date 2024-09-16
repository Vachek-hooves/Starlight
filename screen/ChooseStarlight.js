import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MainLayout} from '../components/layout';

const ChooseStarlight = ({navigation}) => {
  function navigateTo() {
    navigation.navigate('MainScreen', {constellationId: 's1'});
  }
  return (
    <MainLayout>
      <SafeAreaView
        style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={navigateTo}>
          <Text>Open Starlight</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </MainLayout>
  );
};

export default ChooseStarlight;

const styles = StyleSheet.create({});
