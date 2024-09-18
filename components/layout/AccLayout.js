import {ImageBackground, SafeAreaView} from 'react-native';

const AccLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/accBg.jpg')}
      style={{flex: 1}}>
        <SafeAreaView></SafeAreaView>
      {children}
    </ImageBackground>
  );
};

export default AccLayout;
