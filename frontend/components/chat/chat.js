import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
  constructor(props) {
      super(props);

      this.state = { messages: []};
    }

  componentWillMount() {

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
    fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: body
    }).then((error) => error);
  }

  componentDidMount() {
    fetch('http://localhost:3000/messsages').then((message) => {
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
