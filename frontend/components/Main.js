// import into app.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { setCurrentUser } from '../actions/userActions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.doCurrentUser = this.doCurrentUser.bind(this);
    this.test = this.test.bind(this);
  }

  doCurrentUser(user) {
    this.props.dispatch(setCurrentUser(user));
  }

  test() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello
          {this.doCurrentUser(this.props.user)}
          {this.test()}
        </Text>
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Can't do below because infinite loop

// const mapStateToProps = (state) => {
//   return {
//     currentUser
//   };
// };

export default connect(mapStateToProps)(Main);
