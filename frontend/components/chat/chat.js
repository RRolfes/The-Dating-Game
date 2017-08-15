import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

// The Gifted Chat npm module was created and developed by Farid Safi
// https://github.com/FaridSafi/react-native-gifted-chat

class Chat extends React.Component {
  constructor(props) {
      super(props);

      this.state = { messages: []};
      this.sendMessage = this.sendMessage.bind(this);
      this.fetchMessages = this.fetchMessages.bind(this);
    }

  componentWillMount() {

  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = {
      user: this.props.user_id,
      messageOriginationTime: Date.now(),
      messageContent: messages[-1]
    };
    this.sendMessage(message);
  }

  componentDidMount() {
    this.fetchMessages().then((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    }).then((error) => error);
  }

  render() {
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

export default Chat;
