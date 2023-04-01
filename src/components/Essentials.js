import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Essentials = ({navigation,route}) => {
    const {title}=route.params
  return (
    <View>
      <Text>this is Essentials</Text>
      <Text>{title}</Text>
    </View>
  )
}

export default Essentials

const styles = StyleSheet.create({})