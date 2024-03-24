import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Header from '../Components/Header'
import { useFonts } from 'expo-font'
import BreakinfNews from '../Components/BreakinfNews'
import RecommendedNews from '../Components/RecommendedNews'

const HomeScreen = () => {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [recommendedNews, setRecommendedNews] = useState([])

  const [fontLoaded, fontError ] = useFonts({
    spaceFont: require('../fonts/SpaceGrotesk-Medium.ttf')
  })
  
  return (
    <SafeAreaView className='bg-white dark:bg-neutral-800'>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Header />
      <View>
        <BreakinfNews />
        <RecommendedNews />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen