import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, IconButton,Button } from 'react-native-paper';
import React from 'react'

const Essentials = ({navigation,route}) => {
    // const {title}=route.params
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Card style={{marginTop:"20%"}}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="titleLarge">Card content</Text>
    </Card.Content>
    <Card.Actions>
    <Button>Edit</Button>
      <Button>Delete</Button>
    </Card.Actions>
  </Card>
  )
}

export default Essentials

const styles = StyleSheet.create({})

{/* <Card>
<Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    style={{marginTop:'20%'}}
  />
<Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    // style={{marginTop:'20%'}}
  />
  </Card> */}