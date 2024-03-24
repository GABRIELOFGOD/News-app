import { View, Text, StatusBar, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import DiscoverCard from '../Components/DiscoverCard'
import { useQuery } from '@tanstack/react-query'
import { fetchDiscoverNews } from '../utils/context'
import Loader from '../Components/Loader'
import MiniHeader from '../Components/MiniHeader'
import RecommendedCard from '../Components/RecommendedCard'
import { categories } from '../utils/Constants'

const DiscoverScreen = () => {
  const navigation = useNavigation()
  const [activeQuery, setActiveQuery] = useState('business')
  const [presentData, setPresentData] = useState([])

  const discoverFetcher = () => fetchDiscoverNews(activeQuery)

  const discoverQuery = useQuery({
    queryKey: ['DiscoverQuery'],
    queryFn: discoverFetcher
  })

  const handleCategory = category => {
    setActiveQuery(category.category)
    setPresentData([])
  }

  useEffect(() => {
    setPresentData(discoverQuery.data?.articles)
  }, [presentData])

  // const renderDiscovery = ({item, index}) => {
  //   return (
  //     <TouchableOpacity>
  //       <DiscoverCard/>
  //     </TouchableOpacity>
  //   )
  // }

  if(discoverQuery.error){
    console.log('Error fetching Discover query', discoverQuery.error)
  }

  const FRenderItems = ({item, index}) => {
    return(
        <TouchableOpacity key={index}>
            <RecommendedCard index={index} item={item}/>
        </TouchableOpacity>
    )
  }
  
  return (
    <SafeAreaView className='pt-8 bg-white dark:bg-neutral-900 flex-1'>
      <StatusBar style={useColorScheme == 'dark' ? 'light' : 'dark'} />
      <View className=' px-4 mb-6'>
        <Text className='text-4xl text-green-800' style={{
            fontFamily: 'spaceFont'
          }}>Discover</Text>
        <Text className='text-base text-gray-600 dark:text-neutral-300' style={{
            fontFamily: 'spaceFont'
          }}>News all around the world</Text>
      </View>
      <View className=' bg-neutral-100 flex-row mx-2 px-2 py-2 rounded-full'>
          <MagnifyingGlassIcon size='25' color='gray' />
          <TextInput placeholder='Search for news...' placeholderTextColor='gray' className='font-medium text-black pl-4 flex-1 tracking-wider' />
      </View>
      <View className='my-3'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, i) => (
            <TouchableOpacity onPress={() => handleCategory(item)}>
              <DiscoverCard name={item.category} isActive={activeQuery} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View>
        <View>
          {discoverQuery.isLoading ?
            <Loader/> :
            <View>
              <MiniHeader view='1' title={`Discover ${activeQuery} News`} />
              <ScrollView>
                <FlatList
                    data={presentData}
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={FRenderItems}
                />
              </ScrollView>
            </View>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DiscoverScreen