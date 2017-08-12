// Bolier plate for MatchIndex
// This component will need to fetchAllMatches(currentUserId)
// Local state will update onPress, toggling between ChatIndex and GameIndex

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
import MatchDetail from './matchDetail';
import {matches} from '../../reducers/ProspectList';



export default class MatchIndex extends Component {
  constructor(props) {
    super(props);
    this.renderMatches = this.renderMatches.bind(this);
  }

  renderMatches () {
      // let { matches } = this.props.currentUser;

      // matches = matches.filter( match => match.user_id === this.props.currentUserId);
      console.log(Array.isArray(matches));

      return matches.map ( match => (
        <MatchDetail key={match.id} match={match}/>
      ));
    }
  render() {
    return (
      <View style={styles.container}>
        {this.renderMatches()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  }
});