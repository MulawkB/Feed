import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/surfaces/Login';
import { Feed } from './src/surfaces/Feed';
import { Conversations } from './src/surfaces/Conversations';
import { AddPost } from './src/surfaces/AddPost';
import { Favorites } from './src/surfaces/Favorites';
import { Profile } from './src/surfaces/Profile';

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Bold
} from "@expo-google-fonts/poppins";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  let [fontsLoaded] = useFonts ({
    Poppins_400Regular,
    Poppins_400Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Conversations") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#25A0B0",
        tabBarInactiveTintColor: "#000000",
        headerTransparent: true,
        headerTitleAlign: "right",
        headerTitleStyle: {
          paddingTop: 140,
          paddingBottom: 40,
          textAlign: "left",
          fontWeight: "bold",
        },

      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Conversations" component={Conversations} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!userLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
