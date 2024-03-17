import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

import {  heightPercentageToDP as hp } from 'react-native-responsive-screen'

const RecommendedCard = ({item}) => {

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
  
  return (
    <View className='rounded-md flex-row overflow-hidden mx-3 my-1 bg-white dark:bg-neutral-700'>
      <Image
        source={{
            uri: item?.urlToImage
        }}
        style={{
            height: hp(10),
            width: hp(10)
        }}
      />
      <View className='space-y-1 w-[70%] justify-center px-3'>
        <Text
          className='text-sm font-semibold text-gray-900 dark:text-neutral-300'
          style={{
            fontFamily: 'spaceFont'
          }}
        >
          {item?.author?.length > 20 ? 
            item?.author?.slice(0, 20):
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
            item?.title?.slice(0, 50):
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
      <View>
        {/* <Text>
          <
        </Text> */}
      </View>
    </View>
  )
}

export default RecommendedCard