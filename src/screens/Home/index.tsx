import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useRoute, RouteProp, useNavigation, ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IAppState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { IHomePropsRoute } from '../../types'

type ParamList = {
  Home: IHomePropsRoute
}
const HomeScreen = () => {
  //dinh nghia cac type can thiet
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()
  const value = useSelector((state: IAppState) => state.couter.value)

  //lay data = route.params
  const route = useRoute<RouteProp<ParamList, 'Home'>>()

  return (
    <SafeAreaView className='bg-gray-300'>
      <Text className='text-red-600'>MyComponent</Text>
    </SafeAreaView>
  )
}
export default HomeScreen
