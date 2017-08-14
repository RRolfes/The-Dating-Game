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
        backgroundColor: "white",
        fontSize: 27,
        textAlign: 'center',
        color: 'rgb(252, 192, 27)',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: "500"

   },
   headerStyle: {
     backgroundColor: "white",
       height: 70
   },
    headerTintColor: 'rgb(255, 187, 0)',
    headerbackgroundColor: "white",
    // headerHeight: 60
}
  },
},
{
  initialRouteName: 'Matches',
  headerMode: 'float'
});

export const Tabs = TabNavigator({
  Prospects: {
    screen: ProspectDetail,
    navigationOptions: {
       navBarTintColor: '#e91e63',
      tabBarLabel: 'Prospects',
      tabBarIcon: ({
        tintColor,
        backgroundColor
      }) => <Icon name="sentiment-very-satisfied" size={28} color={"rgba(255, 187, 0, 0.7)"}/>
  }
},
  Settings: {
    screen: Settings,
    navigationOptions: {
       activeTintColor: '#e91e63',
      tabBarLabelStyle: {
        backgroundColor: "white",
        fontSize: 27,
        textAlign: 'center',
        color: 'rgb(252, 192, 27)',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: "500"},
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={28} color={'rgba(255, 187, 0, 0.7)'}/>
    }
  },
  Instructions: {
    screen: Instructions,
    navigationOptions: {
       activeTintColor: '#e91e63',
      tabBarLabel: 'Instructions',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={28} color={"rgba(255, 187, 0, 0.7)"}/>
    },
  },
  Matches: {
    screen: Chats,
    navigationOptions: {
       activeTintColor: 'white',
      tabBarLabel: 'Matches',
      tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" size={28} color={"rgba(255, 187, 0, 0.7)"}/>
  }}
  }, {
    tabBarOptions : {
      style: {
        backgroundColor: 'white',
        height: 60,
        padding: 5,
        fontSize: 10,
        textAlign: 'center',
        color: 'rgb(252, 192, 27)',
        fontFamily: 'AvenirNext-Regular',
        fontWeight: "500"

      }
    }
  });

Tabs.navigationOptions = {
  header: {
    style: {
      backgroundColor: '#42a5f5',
      height: 30
    }
  },
};
