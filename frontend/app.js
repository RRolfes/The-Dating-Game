import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from './components/intro/SignUp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Tabs } from './config/router';
import {configureStore} from './store';
import { connect } from 'react-redux';
import Main from './components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined // not logged in yet
    };
    this.onLoggedIn = this.onLoggedIn.bind(this);
  }

  // Gets called after user logs in with Facebook or Google
  onLoggedIn(user) {
    this.setState({ user });
  }

  render() {
    const store = configureStore();
    const { user } = this.state;
    return ( user ?
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Main user={user}/>
         </View>
       </Provider>

      : <SignUp onLoggedIn={this.onLoggedIn} />
    );
  }
}
