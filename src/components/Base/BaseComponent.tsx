
import React from 'react'
import { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {commonStyle} from '../../utils/commonStyle'
import NavigationBar from '../common/navigationBar/navigationBar'

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

  onLeftPress() {
    return null
  }

  onRightPress() {
    return null
  }

  renderNavigationBar() {
    let navigationBarProps = this.navigationBarProps()
    Object.assign(navigationBarProps, this.props)
    return <NavigationBar {...navigationBarProps} />
  }

  _render() {
  }

  render() {
    return (
      <View style={[styles.container]}>
        {this.renderNavigationBar()}
        {this._render()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.white
  }
})
