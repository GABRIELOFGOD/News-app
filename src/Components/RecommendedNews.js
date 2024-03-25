import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MiniHeader from './MiniHeader'
import { useQuery } from '@tanstack/react-query'
import { fetchRecommendedNews } from '../utils/context'
import Loader from './Loader'
import RecommendedCard from './RecommendedCard'
import { useNavigation } from '@react-navigation/native'

const RecommendedNews = () => {
    const navigation = useNavigation()

    const recommendedQuery = useQuery({
        queryKey: ['RecommendedNews'],
        queryFn: fetchRecommendedNews
    })

    if(recommendedQuery.error){
        console.log('Error Loading Recommended News', recommendedQuery.error)
    }

    const FRenderItems = ({item, index}) => {
        return(
            item?.title != '[Removed]' && <TouchableOpacity key={index} onPress={() => navigation.navigate('NewsDetails', item)}>
                <RecommendedCard index={index} item={item}/>
            </TouchableOpacity>
        )
    }
    
  return (
    <View>
        {recommendedQuery.isLoading ?
        <Loader label='Please wait' /> :
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