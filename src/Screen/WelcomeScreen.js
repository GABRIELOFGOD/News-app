import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../images/reporter.jpg')}
      className='flex-1 items-center justify-center'
    >
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.95)']}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
        start={{x:1, y:0 }}
        end={{x:1, y:1 }}
      />
      <View className='flex-1 items-center justify-end max-w-[80%] space-y-4'>
        <Text
          className='text-white text-4xl shadow-2xl capitalize text-center tracking-wider'
          style={{
            fontFamily: 'spaceFont',
            fontSize: wp(10)
          }}
        >
            stay informed from day one
          </Text>
          <Text
            className='text-white text-center max-w-[85%] leading-12 tracking-wider'
            style={{
              fontSize: wp(4),
              fontFamily: 'spaceFont'
            }}
          >
            Discover the latest news with our seamless onboarding Experience
          </Text>
      </View>
      <TouchableOpacity
        className='bg-green-900 p-4 items-center justify-center rounded-full mt-8 w-[90%]'
        onPress={() => navigation.navigate("HomeTab")}
      >
        <Text
          className='text-white text-base'
          style={{
            fontSize: wp(4),
            fontFamily: 'spaceFont'
          }}
        >Getting Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default WelcomeScreen