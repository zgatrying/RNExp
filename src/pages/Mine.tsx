
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
export default class Mine extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  navigationBarProps() {
    return {
      title: '我的',
      hiddenLeftItem: true,
      float: true,
      StatusBarStyle: 'light-content',
      titleStyle: {
        color: '#000'
      }
    }
  }

  gotoLogin() {
    NavigationService.navigate('Login')
  }

  _render() {
    return (
      <View style={styles.container}>
        <View style={{
          height: 300,
          backgroundColor: '#00f',
        }}></View>
        <View style={styles.content}>
          <Button title="gotoLogin" onPress={this.gotoLogin} />
          <Text>Welcome to React Native</Text>
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
