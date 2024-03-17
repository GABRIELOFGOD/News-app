import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({label}) => {
  return (
    <View className='my-10'>
      <ActivityIndicator />
      {label && <Text className='text-center mt-2 text-neutral-800 dark:text-neutral-300'>{label}</Text>}
    </View>
  )
}

export default Loader