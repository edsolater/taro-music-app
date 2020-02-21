import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Try from './Try'
import './home.scss'

export default function Home({ hello }) {
  console.log('hello: ', hello)
  console.log('this.$router.param: ', this)
  return (
    <View className='home'>
      <Text>this is home</Text>
      <Try hello={()=>{console.log(4)}}/>
    </View>
  )
}
Home.config = {
  navigationBarTitleText: 'hello',
} as Config
