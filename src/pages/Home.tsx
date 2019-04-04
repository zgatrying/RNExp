
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  BackHandler,
  ToastAndroid
} from 'react-native'
import { observer } from 'mobx-react'
import BaseComponent from '../components/Base/BaseComponent'
import { NavigationEvents } from 'react-navigation'
import NavigationService from '../NavigationService';

let lastBackPressed = Date.now()

@observer
export default class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  navigationBarProps() {
    return {
      title: '首页',
      hiddenLeftItem: false,
      leftIcon: require('../assets/images/navBar/menu.png'),
      onLeftPress: () => {
        console.log('open drawer')
      },
      StatusBarStyle: 'dark-content',
      titleStyle: {
        color: '#000'
      }
    }
  }

  onWillFocus() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  onWillBlur() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress() {
    if(Date.now() - lastBackPressed <= 2000 ) {
      BackHandler.exitApp()
      return false
    } else {
      lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
      return true
    }
  }

  goPage1() {
    NavigationService.navigate('Page1')
  }

  _render() {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={() => this.onWillFocus()}
          onWillBlur={() => this.onWillBlur()}
        />
        <View style={{
          height: 300,
          backgroundColor: 'rgba(0,0,255,0.6)',
        }}></View>
        <View style={styles.content}>
          <Text>Welcome to React Native</Text>
          <Button title="goPage1" onPress={this.goPage1} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
