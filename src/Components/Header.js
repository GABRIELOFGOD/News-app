import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font'

const Header = () => {
    // const [fontLoaded, fontError ] = useFonts({
    //     spaceFont: require('../fonts/SpaceGrotesk-Medium.ttf')
    // })
    const navigation = useNavigation();
    const { colorScheme, toggleColorScheme } = useColorScheme()
     
  return (
    <View className='py-2 px-4 flex-row justify-between'>
        <Text
            className='uppercase my-auto  font-bold text-2xl text-green-900 dark:text-white'
            style={{
                fontFamily: 'spaceFont'
            }}
        >Gab Report</Text>
        
        <View className='flex-row space-x-4'>
            <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
            <TouchableOpacity
                className='rounded-full h-[40px] my-auto justify-center items-center w-[40px] bg-gray-200 dark:bg-green-900'
                onPress={() => navigation.navigate('Search')}
            >
                <MagnifyingGlassIcon
                    size={25}
                    strokeWidth={2}
                    color={colorScheme == 'dark' ? 'white' : 'green'}
                />
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default Header