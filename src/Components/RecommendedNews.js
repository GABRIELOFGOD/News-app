import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MiniHeader from './MiniHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchRecommendedNews } from '../utils/context'
import Loader from './Loader'
import RecommendedCard from './RecommendedCard'

const RecommendedNews = () => {

    const recommendedQuery = useQuery({
        queryKey: ['RecommendedNews'],
        queryFn: fetchRecommendedNews
    })

    if(recommendedQuery.error){
        console.log('Error Loading Recommended News', recommendedQuery.error)
    }

    const FRenderItems = ({item, index}) => {
        return(
            <TouchableOpacity key={index}>
                <RecommendedCard item={item}/>
            </TouchableOpacity>
        )
    }
    
  return (
    <View>
        {recommendedQuery.isLoading ?
        <Loader /> :
        <View>
            <MiniHeader title='Recommended News' />
            <ScrollView>
                <FlatList
                    data={recommendedQuery.data.articles}
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
  )
}

export default RecommendedNews