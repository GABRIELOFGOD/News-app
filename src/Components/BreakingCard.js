import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')

const BreakingCard = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', item)}>
      <View>
        <Image
          source={{
            uri: item?.urlToImage
          }}
          style={{
            width: width * 0.8,
            height: height * 0.22
          }}
          resizeMode='cover'
          className='rounded-3xl'
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
          start={{ x:0.5, y:0 }}
          end={{ x:0.5, y:1 }}
        />

        <View className='absolute h-[80%] justify-end bottom-6 left-4'>
          <View className='space-y-1'>
            <View className='max-w-[98%]'>
              <Text className='text-white text-base font-semibold capitalize'>
                {
                  item?.title?.length > 60 ? item?.title?.slice(0, 58) + '...' : item?.title.split('-')[0] || 'N/A'
                }
              </Text>
            </View>
            <View>
              <Text className='font-medium text-sm text-neutral-300'>
                {
                  item?.author?.length ? item?.author?.slice(0, 20) + '...' : item?.author
                }
              </Text>
            </View>
          </View>
        </View>
        
      </View>
    </TouchableOpacity>
  )
}

export default BreakingCard