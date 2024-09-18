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
import {TabArticle, TabConstell, TabUser} from './components/icon';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerShown: false,
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: 'transparent',
          // position: 'absolute',
          borderTopWidth: 0,
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
            }}></View>
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
    </Tab.Navigator>
  );
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
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="ChooseStarlight" component={ChooseStarlight} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
