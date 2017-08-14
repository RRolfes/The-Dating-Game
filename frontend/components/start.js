import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ImageBackground
} from 'react-native';

import { setCurrentUser, fetchCurrentUser } from '../actions/userActions';
import { Tabs } from '../config/router';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      age_range_low: '',
      age_range_high: '',
      location: '',
      occupation: '',
      education: '',
      about: '',
      interested_in: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log("Fetch");
    this.props.dispatch(fetchCurrentUser(this.props.user._id));
    console.log("222");
  }

  // use local state to update the user in the db. Will need to take the current Users info for other fields
  handleSubmit() {
    return this.state;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // cahnge placeholder's with currentUser info
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray"
  },
  container: {
    height: 26
  },
});

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(Start);
