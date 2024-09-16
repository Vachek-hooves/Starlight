import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/skybg.jpg')}
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
