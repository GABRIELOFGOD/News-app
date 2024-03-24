import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MiniHeader from './MiniHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchBreakingNews } from '../utils/context'
import Carousel from 'react-native-snap-carousel'
import BreakingCard from './BreakingCard'
import Loader from './Loader'

const { width } = Dimensions.get('window')

const BreakinfNews = () => {
    const [breackingNews, setBreakingNews] = useState([])

    const newQuery = useQuery({
        queryKey: ['BreakingNewsQuery'],
        queryFn: fetchBreakingNews
    })

    if(newQuery.error){
        console.log('Error Loading Breaking News', newQuery.error)
    }
    
  return (
    <View>
      {newQuery.isLoading ? <Loader label='Loading Breaking News' /> :
      <View>
        <MiniHeader title='Breaking News' />
        <Carousel
          data={newQuery.data.articles}
          renderItem={({item}) => (
            <BreakingCard item={item} />
          )}
          firstItem={1}
          inactiveSlideScale={0.8}
          sliderWidth={width}
          itemWidth={width * 0.8}
          slideStyle={{
            display: 'flex',
            alignItems: 'center'
          }}
        />
      </View>
      }
    </View>
  )
}

export default BreakinfNews