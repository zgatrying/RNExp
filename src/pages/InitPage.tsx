import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React from 'react';
import NavigationService from '../NavigationService'

export default class InitPage extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = () => {
    this.validateToken()
    .then((isValid) => {
      if(isValid) {
        NavigationService.navigate('Home')
      } else {
        NavigationService.navigate('Login')
      }
      SplashScreen.hide();
    })
    .catch(error => {
      console.log(error)
      SplashScreen.hide();
    })
  }
  async validateToken():Promise<boolean> {
    let isValid:boolean = false
    let token:any = await AsyncStorage.getItem('token')
    isValid = !!token
    return isValid
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}