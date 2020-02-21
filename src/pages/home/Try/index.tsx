import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import icon from './circle.svg'
import './index.scss'

export default function Try(props: { hello: Function }) {
  console.log('props.hello: ', props.hello)
  console.log('typeof props.hello: ', typeof props.hello)
  return (
    <View className='home'>
      <Text>{props.hello.toString()}</Text>
      {/* TODO: 这个要提取出来 */}
      <View className='icon'>
        <View
          className='image-color'
          style={`mask-image:url(${icon});-webkit-mask-image:url(${icon})`}
        />
        <Image src={icon} className='icon-body' mode='aspectFit' />
      </View>
    </View>
  )
}
