import { View, Text } from 'react-native'
import React from 'react'

const MiniHeader = ({title}) => {
  return (
    <View className='flex-row w-full justify-between py-1 px-4'>
        <Text style={{
            fontFamily:'spaceFont'
        }} className='text-xl text-green-800 dark:text-white'>{title}</Text>
        <Text className='text-base my-auto dark:text-neutral-300 text-gray-600'>View All</Text>
    </View>
  )
}

export default MiniHeader