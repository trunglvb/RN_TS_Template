import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Home'
import { NativeWindStyleSheet } from 'nativewind'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { IHomePropsRoute } from './src/types'

NativeWindStyleSheet.setOutput({
  default: 'native'
})

//dinh nghia nhung params se truyen di theo Navigator
//dung useRoute ket hop voi type de lay gia tri params
type RootStackParamList = {
  //neu ko co truyen gi the de undifine
  Home: IHomePropsRoute
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
        <StatusBar />
      </Provider>
    </NavigationContainer>
  )
}
