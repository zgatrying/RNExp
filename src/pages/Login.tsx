
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { observer } from 'mobx-react'
import BaseComponent from '../components/Base/BaseComponent'
import NavigationService from '../NavigationService';

@observer
export default class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  navigationBarProps() {
    return {
      title: '登录',
      hiddenLeftItem: true,
      Android_translucent: true,
      float: true,
      StatusBarStyle: 'dark-content',
      titleStyle: {
        color: '#fff'
      }
    }
  }

  gotoRegister() {
    NavigationService.navigate('Register')
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
