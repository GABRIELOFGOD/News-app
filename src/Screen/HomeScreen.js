import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useColorScheme } from 'nativewind'
import { useQuery } from '@tanstack/react-query'
import { fetchBreakingNews, fetchRecommendedNews } from  '../utils/context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Header from '../Components/Header'
import { useFonts } from 'expo-font'
import BreakinfNews from '../Components/BreakinfNews'
import RecommendedNews from '../Components/RecommendedNews'

const HomeScreen = () => {

  const { colorSchema, toggleColorScheme } = useColorScheme();
  const [recommendedNews, setRecommendedNews] = useState([])

  // =================== FETCHING BREAKING NEWS ===================== //
  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ['breakingNews'],
  //   queryFn: [fetchBreakingNews],
  // });

  // if(data){
  //   setBreakingNews(data.articles)
  // }

  const [fontLoaded, fontError ] = useFonts({
    spaceFont: require('../fonts/SpaceGrotesk-Medium.ttf')
  })
  
  return (
    <SafeAreaView>
      <StatusBar style={colorSchema == 'dark' ? 'light' : 'dark'} />
      <Header />
      <View>
        <BreakinfNews />
        <RecommendedNews />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen