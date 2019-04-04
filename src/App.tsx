
import React from 'react';
import { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createTabNavigator, TabBarBottom } from 'react-navigation';
import { Provider } from 'mobx-react'
import NavigationService from './NavigationService'

import InitPage from './pages/InitPage';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Login from './pages/Login';
import Register from './pages/Register';
import Mine from './pages/Mine';

const AppNavigator = createSwitchNavigator({
  InitPage: {
    screen: InitPage
  },
  Main: {
    screen: createStackNavigator({
      Tab: {
        screen: createTabNavigator({
          Home,
          Mine
        }, {
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            activeTintColor: '#fff',
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
              backgroundColor: '#f00',
              width: '100%',
            },
            style: {
              backgroundColor: 'blue',
            }
          }
        })
      },
      Page1: {
        screen: Page1
      }
    }, {
      navigationOptions: {
        header: null
      }
    })
  },
  Authenticate: {
    screen: createStackNavigator({
      Login,
      Register,
    }, {
      navigationOptions: {
        header: null
      }
    })
  }
}, {
  initialRouteName: 'InitPage'
});

export default class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true; //去除黄色弹框警告
  }

  render() {
    return (
      <Provider >
        <AppNavigator ref={NavigationService.createRef} />
      </Provider>
    );
  }
}
