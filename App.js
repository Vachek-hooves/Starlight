import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ArticleDetailScreen,
  ArticleScreen,
  ChooseStarlight,
  ExplorerScreen,
  MainScreen,
  WelcomeScreen,
} from './screen';
import {AppProvider} from './store/context';

import {TabArticle, TabConstell, TabUser} from './components/icon';
import {
  View,
  AppState,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import {resetPlayer, setupPlayer} from './components/sound/setupPlayer';
import {useEffect} from 'react';

import VolumeControl from './components/sound/VolumeControl';

function getDeviceInfo() {
  const {width, height, scale} = Dimensions.get('window');
  const deviceType =
    Platform.OS === 'ios' ? 'iOS Simulator' : 'Android Emulator';
  const deviceModel = Platform.OS === 'ios' ? 'iPhone' : 'Android Device';

  console.log(`Running on ${deviceType}`);
  console.log(`Device: ${deviceModel}`);
  console.log(`Screen: ${width}x${height} @${scale}x`);
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const {height} = Dimensions.get('window');
const SEphone = 670;

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
          height: 80,
        },
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: 'gray',
              height: 70,
              justifyContent: 'center',
              bottom: height > SEphone ? 16 : 5,
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
        component={VolumeControl}
        options={{
          tabBarIcon: () => <VolumeControl />,
          tabBarButton: props => (
            <TouchableOpacity {...props} onPress={() => {}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  useEffect(() => {
    setupPlayer();
    // getDeviceInfo();

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        resetPlayer();
      } else if (nextAppState === 'active') {
        setupPlayer();
      }
    });

    return () => {
      subscription.remove();
      resetPlayer();
    };
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
          <Stack.Screen
            name="ArticleDetailScreen"
            component={ArticleDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
