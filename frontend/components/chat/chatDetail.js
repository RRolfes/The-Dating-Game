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


class ChatDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>

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

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps)(ChatDetail);
