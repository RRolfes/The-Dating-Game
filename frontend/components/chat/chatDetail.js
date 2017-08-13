// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {chat} from '../../reducers/chat';



export default class ChatDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <View>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/girl.jpg')}
          />
        </View>
        <View>
          <Text style={styles.name}>

          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height:56,
    width:56,
    borderColor: 'white',
    borderWidth:2,
    borderRadius: 20
  },
});
