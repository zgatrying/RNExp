
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { observer } from 'mobx-react'
import BaseComponent from '../components/Base/BaseComponent'
import NavigationService from '../NavigationService'

@observer
export default class Page1 extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {}
  }

  navigationBarProps() {
    return {
      title: 'Page1',
      Android_translucent: true,
      StatusBarStyle: 'light-content',
      titleStyle: {
        color: '#000'
      }
    }
  }

  goBack() {
    NavigationService.goBack()
  }

  go(routeName) {
    NavigationService.navigate(routeName)
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
          <Button title="goback" onPress={this.goBack} />
          <Button title="goHome" onPress={this.go.bind(this, 'Home')} />
          <Button title="goMine" onPress={this.go.bind(this, 'Mine')} />
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
