import { View, Text } from 'react-native'
import React from 'react'

const DiscoverCard = ({name, isActive}) => {
  return (
    <View className={`mx-2 rounded-full py-1 px-4 ${isActive == name ? 'bg-green-900' : 'bg-neutral-300'} `}>
      <Text className={`capitalize text-base ${isActive == name ? 'text-white':'text-gray-800'}`}>{name}</Text>
    </View>
  )
}

export default DiscoverCard