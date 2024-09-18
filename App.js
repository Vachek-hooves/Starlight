import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ArticleScreen,
  ChooseStarlight,
  ExplorerScreen,
  MainScreen,
  WelcomeScreen,
} from './screen';
import {AppProvider} from './store/context';
import {Screen} from 'react-native-screens';
import {TabArticle, TabConstell, TabUser, Volume} from './components/icon';
import {View, Text} from 'react-native';
import {setupPlayer} from './components/sound/setupPlayer';
import {useEffect} from 'react';
import VolumeIcon from './components/icon/VolumeIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0, // for Android
          shadowOpacity: 0, // for iOS
          borderTopWidth: 0,
          position: 'absolute',
          height: 70,
        },
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: 'gray',
              height: 70,
              justifyContent: 'center',
              bottom: 16,
              marginHorizontal: 10,
              borderRadius: 16,
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="ChooseStarLight"
        component={ChooseStarlight}
        options={{tabBarIcon: ({focused}) => <TabConstell focused={focused} />}}
      />
      <Tab.Screen
        name="ExplorerScreen"
        component={ExplorerScreen}
        options={{tabBarIcon: ({focused}) => <TabUser focused={focused} />}}
      />
      <Tab.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{tabBarIcon: ({focused}) => <TabArticle focused={focused} />}}
      />
      <Tab.Screen
        name="Sound"
        component={Volume}
        options={{
          tabBarIcon: () => <VolumeIcon />,
          tabBarLabel: () => null, // This removes the label below the icon
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  useEffect(() => {
    setupPlayer();
  }, []);

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
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="ChooseStarlight" component={ChooseStarlight} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
