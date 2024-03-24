import { View, TouchableOpacity, ActivityIndicator, Dimensions, Share } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, ShareIcon } from 'react-native-heroicons/solid'
import WebView from 'react-native-webview'

const { width, height } = Dimensions.get('window')

const NewsDetailsScreen = () => {
  const navigation = useNavigation()
  const { params: item } = useRoute();
  const [loading, setLoading] = useState(false)

  const onShare = async () => {
    try {
      const result = await Share.share({
       title: 'News link',
        message: 'Share our news with your friends', 
        url: item.url
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

   
  
  return (
    <SafeAreaView className='flex-1 bg-white md:bg-neutral-800'>
      <View className='bg-white md:bg-neutral-800 flex-row justify-between mx-4 items-center'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='rounded-full bg-gray-100 dark:bg-neutral-500 p-2 w-fit'
        >
          <ChevronLeftIcon size={25} color='green' strokeWidth={3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare}
          className='rounded-full bg-gray-100 p-2 w-fit'
        >
          <ShareIcon size={25} color='green' />
        </TouchableOpacity>
      </View>

      <WebView
        source={{ uri: item.url }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={{marginTop: 20}}
      />

      {loading && <ActivityIndicator
        size='large'
        color='green'
        style={{
          position: 'absolute',
          top: height / 2,
          left: width / 2
        }}
      />}
    </SafeAreaView>
  )
}

export default NewsDetailsScreen