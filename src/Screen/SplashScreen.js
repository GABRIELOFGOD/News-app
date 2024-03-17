import { View, Text, ImageBackground } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreens from 'expo-splash-screen'

const SplashScreen = () => {
  const navigation = useNavigation();
  const [fontLoaded, fontError ] = useFonts({
    spaceFont: require('../fonts/SpaceGrotesk-Medium.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontLoaded || fontError){
      await SplashScreens.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
    
  })

  useEffect(() => {
    onLayoutRootView();
  }, [fontLoaded, fontError]);

  if(!fontLoaded){
    return null;
  }
  
  return (
    <ImageBackground
      source={require('../images/reporter.jpg')}
      className='flex-1 items-center justify-center'
    >
      <LinearGradient
        colors={['rgba(0,85,0,0.95)', 'rgba(0,85,0,0.95)']}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
        start={{x:0.5, y:0 }}
        end={{x:0.5, y:1 }}
      />
      <View onLayout={onLayoutRootView}>
        <Text className='text-white uppercase text-3xl'
          style={{
            fontFamily: 'spaceFont'
          }}
        >start news</Text>
      </View>
    </ImageBackground>
  )
}

export default SplashScreen