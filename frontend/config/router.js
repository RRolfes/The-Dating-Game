import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Instructions from '../components/intro/Instructions';
import ProspectDetail from '../components/prospect/ProspectDetail';
import MatchIndex from '../components/match/matchIndex';
import Settings from '../components/settings/Settings';
import ChatDetail from '../components/chat/chatDetail';
import Chat from '../components/chat/chat';

const Chats = StackNavigator ({
  Matches: {
    screen: MatchIndex,
    navigationOptions: {
      header: null
    }
  },
  ChatDetail: {
    screen: ChatDetail,
    navigationOptions: {
   title: 'theDatingGame',
   headerTitleStyle: {
      /*  */
   },
   headerStyle: {
      /*  */
   },
   headerTintColor: 'black',
   backgroundColor: "white"
}
  },
},
{
  initialRouteName: 'Matches',
  headerMode: 'float',
  headerStyle: {backgroundColor:"red"}
});

export const Tabs = TabNavigator({
  Prospects: {
    screen: ProspectDetail,
    navigationOptions: {
      tabBarLabel: 'Prospects',
      tabBarIcon: ({ tintColor }) => <Icon name="sentiment-very-satisfied" size={28} color={tintColor}/>
  },
},
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
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={28} color={tintColor}/>
    },
  },
  Matches: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={28} color={tintColor}/>
    },
  }
});
