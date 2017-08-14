import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from './components/intro/signUp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Tabs } from './config/router';
import {configureStore} from './store';
import Settings from './components/settings/Settings';
import Start from './components/start';
import { fetchCurrentUser, updateCurrentUser } from './actions/userActions';

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
    window.store = store;
    window.getState = store.getState;
    window.fetchCurrentUser = fetchCurrentUser();
    window.updateCurrentUser = updateCurrentUser();
    return ( user ?
      <View style={{flex: 1}}>
        <Provider store={store}>
          <Start user={user}/>
        </Provider>
      </View>

      : <SignUp onLoggedIn={this.onLoggedIn} />
    );
  }
}
