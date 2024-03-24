import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'

import {  heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { BookmarkSquareIcon } from 'react-native-heroicons/solid'
import AsyncStorage from '@react-native-async-storage/async-storage'

const RecommendedCard = ({item, index}) => {
  const [isBooked, setBook] = useState([])

  // useEffect(async() => {
  //   const isInStorage = await AsyncStorage.getItem('bookmarkedNews')
  // }, [])

  const dateFormatter = dated => {
    const option = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }

    const date = new Date(dated)
    return date.toLocaleDateString(undefined, option)
  }

  const bookmarkChanger = async (item) => {
    try {
      const checkBookmarked = await AsyncStorage.getItem('bookmarkedNews')
      const bookmarkedNews = checkBookmarked ? JSON.parse(checkBookmarked) : []

      const thisNewsBookmarked = bookmarkedNews.some(bookMarkArticle => {
        bookMarkArticle?.url == item?.url
      })

      if(!thisNewsBookmarked){
        const newSaved = await bookmarkedNews.push(item)
        await AsyncStorage.setItem('bookmarkedNews', JSON.stringify(newSaved))
      } else {
        const removeFromBookMark = bookmarkedNews.filter(someNews => {
          someNews.url != item.url
        })
        await AsyncStorage.setItem('bookmarkedNews', JSON.stringify(removeFromBookMark))
        const updatedStatus = [...isBooked]
        updatedStatus[index] = false
        setBook(updatedStatus)
      }

    } catch (error) {
      console.log('An error occur from bookmark', error)
    }
  }
  
  return (
    <View className='rounded-md flex-row overflow-hidden mx-3 my-1 bg-white dark:bg-neutral-700'>
      <Image
        source={{
            uri: item?.urlToImage
        }}
        style={{
            height: hp(12),
            width: hp(10)
        }}
      />
      <View className='space-y-1 w-[65%] justify-center px-3'>
        <Text
          className='text-sm font-semibold text-gray-900 dark:text-neutral-300'
          style={{
            fontFamily: 'spaceFont'
          }}
        >
          {item?.author?.length > 20 ? 
            item?.author?.slice(0, 20) + '...':
            item?.author
          }
        </Text>

        <Text
          className='text-neutral-800 dark:text-white text-lg font-bold leading-5'
          style={{
            fontFamily: 'spaceFont'
          }}
        >
          {item?.title?.length > 50 ?
            item?.title?.slice(0, 50) + '...':
            item?.title
          }
        </Text>

        {/* ============ FORMATTED DATE ================= */}
        <Text
          className='text-xs text-gray-500 dark:text-neutral-900'
          style={{
            fontFamily: 'spaceFont'
          }}
        >{dateFormatter(item?.publishedAt)}</Text>
      </View>

      {/* ================ BOOKMARK VIEW =================== */}
      <TouchableOpacity
        className='my-auto pr-2'
        onPress={() => bookmarkChanger(item, index)}
      >
        <BookmarkSquareIcon color={isBooked[index] ? 'green' : 'gray'} />
      </TouchableOpacity>
    </View>
  )
}

export default RecommendedCard