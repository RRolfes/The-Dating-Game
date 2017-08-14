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
import { GiftedChat } from 'react-native-gifted-chat';


class ChatDetail extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.state = { messages: []};
  }

  renderMessages () {

      return chat.messages.map ( message => (
        <ChatItem key={message.id} message={message}/>
      ));
    }

    onSend(messages = []) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));
      let body = {
        user: this.props.user_id,
        messageOriginationTime: Date.now(),
        messageContent: messages[-1]
      };
      fetch('https://localhost:8081/message', {
        method: 'POST',
        json: true,
        headers: {
            "Content-Type": "application/json",
        },
        body: body
      }), function(error) {
        return error;
      };
    }

   componentDidMount() {
      fetch('https://localhost:8081/messsages').then((message) => {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, message),
          };
        });
      }), function(error) {
        return error;
      };
    }

  render() {
    console.log("XXXXX");
    return (

        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => {
            this.onSend(messages);
          }}
          user={
            {
              id: this.props.user_id,
              name: this.props.name,
              avatar: this.props.avatar
            }
          }
        />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  messegeBox: {
    height:56,
    width:300,
    borderColor: 'red',
    borderWidth:2,
    borderRadius: 20
  },
});

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(ChatDetail);
