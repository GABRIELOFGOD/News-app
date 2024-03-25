import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { debounce } from 'lodash'
import { searchUrlQuery } from '../utils/context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import RecommendedCard from '../Components/RecommendedCard'

const SearchScreen = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async search => {
    if(search && search.length > 2){
      setLoading(true)
      setResult([])
      setSearchTerm(search)

      try {

        const data = await searchUrlQuery(search)
        setLoading(false)

        if(data && data?.articles){
          setResult(data?.articles)

        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  const FRenderItems = ({item, index}) => {
    return(
      item?.title != '[Removed]' && <TouchableOpacity key={index} onPress={() => navigation.navigate('NewsDetails', item)}>
        <RecommendedCard index={index} item={item}/>
      </TouchableOpacity>
    )
  }

  const handleChangeDebounce = useCallback(debounce(handleSearch, 400), [])
  return (
    <SafeAreaView className='bg-white flex-1 dark:bg-black'>
      <View className='bg-gray-100 justify-between flex-row mx-4 py-2 rounded-full'>
        <TextInput onChangeText={handleChangeDebounce} placeholder='Search for your news...' placeholderTextColor='gray' className='px-4 text-base text-black' />
        <TouchableOpacity className='mr-3' onPress={() => navigation.navigate('Home')}>
          <XMarkIcon size={25} color='green' strokeWidth={3} />
        </TouchableOpacity>
      </View>

      <View className='mx-4 my-4'>
        <Text className='text-xl dark:text-white text-neutral-800 font-bold' style={{
            fontFamily: 'spaceFont'
          }}>
          {result?.length} news for {searchTerm}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: hp(5)
        }}
      >
        <FlatList
          data={result}
          nestedScrollEnabled={true}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={FRenderItems}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen