
import React from 'react'
import { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {commonStyle} from '../../utils/commonStyle'
import NavigationBar from '../common/navigationBar/navigationBar'
import NavigationService from '../../NavigationService'
import SafeAreaView from 'react-native-safe-area-view'
export default class BaseComponent extends Component {

  constructor(props) {
    super(props)
    this.navigationBarProps = this.navigationBarProps.bind(this)
    this._render = this._render.bind(this)
    this.onLeftPress = this.onLeftPress.bind(this)
    this.onRightPress = this.onRightPress.bind(this)
  }

  navigationBarProps() {
    return {
      title: '导航栏标题'
    }
  }

  onLeftPress():void {
    NavigationService.goBack()
    console.log('navBar left pressed')
  }

  onRightPress():void {
    console.log('navBar right pressed')
  }

  renderNavigationBar() {
    let navigationBarProps = this.navigationBarProps()
    Object.assign(navigationBarProps, this.props)
    return <NavigationBar {...navigationBarProps} onLeftPress={this.onLeftPress} onRightPress={this.onRightPress} />
  }

  _render(){}

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavigationBar()}
        {this._render()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.blue
  }
})
