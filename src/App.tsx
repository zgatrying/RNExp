
import React from 'react';
import { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createTabNavigator, TabBarBottom } from 'react-navigation';
import { Provider } from 'mobx-react'
import NavigationService from './NavigationService'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Mine from './pages/Mine';

const AppNavigator = createStackNavigator({
  TabNavigator: {
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
  navigationOptions: {
    header: null
  }
});

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
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
