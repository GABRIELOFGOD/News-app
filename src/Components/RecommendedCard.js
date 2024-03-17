import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

import {  heightPercentageToDP as hp } from 'react-native-responsive-screen'

const RecommendedCard = ({item}) => {
  return (
    <View>
      <Image
        source={{
            uri: item?.urlToImage
        }}
        style={{
            height: hp(9),
            width: hp(10)
        }}
      />
    </View>
  )
}

export default RecommendedCard