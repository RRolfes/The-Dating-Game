import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Instructions from '../components/intro/Instructions';
import ProspectDetail from '../components/prospect/ProspectDetail';
import MatchIndex from '../components/match/matchIndex';
import Settings from '../components/settings/Settings';
import ChatDetail from '../components/chat/chatDetail';

const Chat = StackNavigator ({
  Matches: {
    screen: MatchIndex,
    navigationOptions: {
      header: null
    }
  },
  ChatDetail: {
    screen: ChatDetail
  },
},
{
  initialRouteName: 'Matches',
  headerMode: 'float',
  headerStyle: {backgroundColor:"red"}
});

export const Tabs = TabNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={28} color={tintColor}/>
    }
  },
  Instructions: {
    screen: Instructions,
    navigationOptions: {
      tabBarLabel: 'Instructions',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={28} color={tintColor}/>
    },
  },
  Prospects: {
    screen: ProspectDetail,
    navigationOptions: {
      tabBarLabel: 'Prospects',
      tabBarIcon: ({ tintColor }) => <Icon name="sentiment-very-satisfied" size={28} color={tintColor}/>
    },
  },
  Matches: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={28} color={tintColor}/>
    },
  }
});
