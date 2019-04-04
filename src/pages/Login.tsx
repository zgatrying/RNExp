
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
} from 'react-native'
import { observer } from 'mobx-react'
import BaseComponent from '../components/Base/BaseComponent'
import NavigationService from '../NavigationService';

@observer
export default class Login extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  navigationBarProps() {
    return {
      title: '登录',
      hiddenLeftItem: true,
      Android_translucent: true,
      StatusBarStyle: 'dark-content',
      titleStyle: {
        color: '#000'
      }
    }
  }

  gotoRegister() {
    NavigationService.navigate('Register')
  }

  async login() {
    await AsyncStorage.setItem('token', 'true')
    NavigationService.navigate('Home')
  }

  _render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 300,
          backgroundColor: '#00f',
        }}></View>
        <View style={styles.content}>
          <Text>Welcome to React Native</Text>
          <Button title="gotoRegister" onPress={this.gotoRegister} />
          <Button title="login" onPress={this.login} />
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
