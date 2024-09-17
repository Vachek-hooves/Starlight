import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChooseStarlight, MainScreen, WelcomeScreen} from './screen';
import {AppProvider} from './store/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return <Tab.Navigator></Tab.Navigator>;
};

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 1800,
          }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="ChooseStarlight" component={ChooseStarlight} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
