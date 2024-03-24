import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const SavedScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1 bg-white dark:bg-neutral-800 items-center justify-center'>
      <View>
        <Text className='text-center text-4xl text-neutral-400' style={{
            fontFamily: 'spaceFont'
          }}>COMING SOON</Text>
          <View className='flex-row justify-center mt-5'>
            <Text className='text-xl text-neutral-800 dark:text-white' style={{
            fontFamily: 'spaceFont'
          }}>Go back </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text className='text-xl text-green-900' style={{
            fontFamily: 'spaceFont'
          }}>HOME</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default SavedScreen