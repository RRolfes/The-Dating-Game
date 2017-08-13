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
import ChatItem from './chatItem';


class ChatDetail extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }

  renderMessages () {
      // let { matches } = this.props.currentUser;

      // matches = matches.filter( match => match.user_id === this.props.currentUserId);

      return matches.map ( match => (
        <MatchDetail key={match.id} match={match} navigator={this.props.navigation}/>
      ));
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
