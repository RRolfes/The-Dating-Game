// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';



export default class ChatItem extends Component {
  constructor(props) {
    super(props);
    this.HandleSend = this.HandleSend.bind(this);
  }

  HandleSend() {
    console.log("XXX");
    // this.props.navigator.navigate('ChatDetail', {user_id: this.props.match.id});
  }



  render() {
    console.log(this.props.message.authorId);
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/girl.jpg")}
          />
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            {this.props.message.text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  avatar: {
    height:26,
    width:26,
    borderColor: 'white',
    borderWidth:2,
    borderRadius: 10
  },
  text: {
    marginLeft: 15,
    fontSize: 15,
    color: '#121212',
    fontFamily: 'AvenirNext-Medium',
    // fontWeight: 'bold'
  }
});
