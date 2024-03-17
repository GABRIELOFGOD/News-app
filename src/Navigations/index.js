import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import HomeScreen from '../Screen/HomeScreen'
import DiscoverScreen from '../Screen/DiscoverScreen'
import SavedScreen from '../Screen/SavedScreen'
import SplashScreen from '../Screen/SplashScreen'
import WelcomeScreen from '../Screen/WelcomeScreen'
import SearchScreen from '../Screen/SearchScreen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme()
    const TabNavigator = () => {
        return(
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if(route.name == 'Home'){
                            iconName = 'home'
                        } else if (route.name == 'Discover'){
                            iconName = 'compass-outline'
                        } else if (route.name == 'Saved'){
                            iconName = 'bookmark-outline'
                        } else if(route.name == 'Search'){
                            iconName = 'search'
                        }

                        const customizedSize = 25;

                        return (
                            <Ionicons
                                name={iconName}
                                size={customizedSize}
                                color={focused ? 'green' : 'gray'}
                            />
                        )
                        
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'spaceFont',
                    },
                    tabBarStyle: {
                        backgroundColor: colorScheme == 'dark' ? '#000000' : '#ffffff'
                    }
                })}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Discover' component={DiscoverScreen} />
                <Tab.Screen name='Saved' component={SavedScreen} />
                <Tab.Screen name='Search' component={SearchScreen} />
            </Tab.Navigator>
        )
    }
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeTab'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Search' component={SearchScreen} options={{
                animation: 'slide_from_bottom'
            }} />
            <Stack.Screen name='HomeTab' component={TabNavigator} />
            {/* <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Splash' component={SplashScreen} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation