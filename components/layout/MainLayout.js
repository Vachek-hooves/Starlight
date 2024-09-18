import {ImageBackground} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/skybg.jpg')}
      style={{flex: 1, paddingBottom: 120}}>
      {children}
    </ImageBackground>
  );
};

export default MainLayout;
