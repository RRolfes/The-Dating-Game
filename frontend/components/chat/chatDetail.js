// Boiler plate for ChatIndex
// This component will need to fetchAllChats(currentUserId)
// map over all the chats to populate the screen with each ChatDetail

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {chat} from '../../reducers/chat';
import ChatItem from './chatItem';


class ChatDetail extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }

  renderMessages () {
    console.log(chat.id);
      return chat.messages.map ( message => (
        <ChatItem key={message.id} message={message}/>
      ));
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>

        hello
        </Text>
        {this.renderMessages()}
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
