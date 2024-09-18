import {ImageBackground} from 'react-native';

const WelcomeLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/skyClear.jpg')}
      style={{flex: 1, paddingBottom: 100}}>
      {children}
    </ImageBackground>
  );
};

export default WelcomeLayout;
