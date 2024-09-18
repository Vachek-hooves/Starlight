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
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from './constants/color';

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
        },
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: Color.tabBtnBg,
              height: 75,
              justifyContent: 'center',
              bottom: 20,
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
    </Tab.Navigator>
  );
};

// Wrap your screen components with this
const ScreenWrapper = ({children}) => (
  <SafeAreaView style={{flex: 1, paddingBottom: 70}}>{children}</SafeAreaView>
);

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
