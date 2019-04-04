import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight, StatusBar } from 'react-native'
import { commonStyle } from '../../../utils/commonStyle'
import deviceInfo from '../../../utils/deviceInfo'
const DefaultLeftIcon = require('../../../assets/images/navBar/back.png')
const MenuRightIcon = require('../../../assets/images/navBar/menu.png')
interface Props {
  float: boolean;
  hiddenNav: boolean;
  Android_translucent: boolean;
  Android_StatusBar_BackgroundColor: string;
  StatusBarStyle: any;
  navBarStyle?: object;
  
  hiddenLeftItem: boolean;
  renderLeft?: () => React.StatelessComponent;
  leftIcon: any;
  leftTitle?: string;
  leftBtnStyle?: object;
  leftTitleStyle?: object;
  onLeftPress?: () => void;
  
  renderCenter?: () => React.StatelessComponent;
  title: string;
  titleStyle?: object;
  
  hiddenRightItem: boolean;
  renderRight?: () => React.StatelessComponent;
  rightIcon?: any;
  rightItemStyle?: object;
  onRightPress?: () => void;
}

export default class navigationBar extends Component<Props> {

  static defaultProps = {
    float: false,
    Android_translucent: true,
    Android_StatusBar_BackgroundColor: 'rgba(255,255,255,0.1)',
    StatusBarStyle: 'light-content',
    hiddenNav: false,
    hiddenLeftItem: false,
    hiddenRightItem: true,

    leftIcon: DefaultLeftIcon,
    rightIcon: MenuRightIcon
  }

  renderLeft() {
    const {
      hiddenLeftItem,
      renderLeft,
      leftIcon,
      leftTitle,
      leftTitleStyle,
      leftBtnStyle,
      onLeftPress
    } = this.props;
    if(hiddenLeftItem) {
      return <View style={[styles.leftBtnStyle]}/>
    }
    if(renderLeft) {
      return renderLeft()
    }
    return (
      <View style={styles.leftItemStyle}>
        <TouchableHighlight 
          activeOpacity={commonStyle.navBtnActiveOpacity}
          underlayColor={commonStyle.navBtnHighLightColor}
          onPress={onLeftPress}
          style={[styles.leftBtnStyle, leftBtnStyle]}>
          <Image source={leftIcon} style={styles.leftImageStyle} />
        </TouchableHighlight>
        <Text style={[styles.leftTitleStyle, leftTitleStyle]}>{leftTitle}</Text>
      </View>
    )
  }

  renderCenter() {
    const {
      renderCenter,
      title,
      titleStyle
    } = this.props;
    if(renderCenter) {
      return renderCenter()
    }
    return (
      <View style={styles.titleContainer}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    )
  }

  renderRight() {
    const {
      hiddenRightItem,
      renderRight,
      rightIcon,
      onRightPress,
      rightItemStyle
    } = this.props;
    if(hiddenRightItem) {
      return <View style={styles.rightItemStyle}/>
    }
    if(renderRight) {
      return renderRight()
    }
    if(rightIcon) {
      return (
        <View style={[styles.rightItemStyle, rightItemStyle]}>
          <TouchableHighlight
            activeOpacity={commonStyle.navBtnActiveOpacity}
            underlayColor={commonStyle.navBtnHighLightColor}
            onPress={onRightPress}
            style={styles.rightBtnStyle}
          >
            <Image source={rightIcon} style={styles.rightImageStyle} />
          </TouchableHighlight>
        </View>
      )
    }
    return null
  }

  getNavBarStyle() {
    const {
      navBarStyle,
      float,
      Android_translucent
    } = this.props;
    let addAndroidStatusPadding = Android_translucent && deviceInfo.deviceOS === 'android';
    return [
      styles.navBarStyle,
      float? styles.floatStyle : {},
      Android_translucent? {
        height: addAndroidStatusPadding ? commonStyle.navHeight + commonStyle.androidStatusBarHeight : commonStyle.navHeight
      } : {},
      navBarStyle
    ]
  }

  getNavContentStyle() {
    const {
      Android_translucent
    } = this.props;
    let addAndroidStatusPadding = Android_translucent && deviceInfo.deviceOS === 'android';
    return [
      styles.navContentStyle,
      {
        marginTop: addAndroidStatusPadding ? commonStyle.navStatusBarHeight + commonStyle.androidStatusBarHeight : commonStyle.navStatusBarHeight,
      }
    ]
  }

  render() {
    if(this.props.hiddenNav) {
      return <View/>
    }
    const {
      Android_translucent,
      Android_StatusBar_BackgroundColor,
      StatusBarStyle,
    } = this.props;
    return (
      <View style={this.getNavBarStyle()}>
        <StatusBar 
          animated 
          translucent={Android_translucent} 
          backgroundColor={Android_StatusBar_BackgroundColor}
          barStyle={StatusBarStyle}
        />
        <View style={this.getNavContentStyle()}>
          {this.renderLeft()}
          {this.renderCenter()}
          {this.renderRight()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  floatStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 0,
  },
  navBarStyle: {
    width: deviceInfo.deviceWidth,
    height: commonStyle.navHeight,
    backgroundColor: commonStyle.navThemeColor,
    borderBottomWidth: 0.5,
    borderBottomColor: commonStyle.lineColor,
  },
  navContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: commonStyle.navStatusBarHeight,
    height: commonStyle.navContentHeight,
    marginLeft: commonStyle.navMarginLeft,
    marginRight: commonStyle.navMarginRight,
  },
  leftItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftImageStyle: {
    width: commonStyle.navImageWidth,
    height: commonStyle.navImageHeight,
  },
  leftBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: commonStyle.navBtnWidth,
    height: commonStyle.navContentHeight,
  },
  leftTitleStyle: {
    fontSize: commonStyle.navLeftTitleFont,
    color: commonStyle.navLeftTitleColor
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleStyle: {
    fontSize: commonStyle.navTitleFont,
    color: commonStyle.navTitleColor,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subTitleStyle: {
    fontSize: 11,
    marginTop: 5
  },
  rightImageStyle: {
    width: commonStyle.navImageWidth,
    height: commonStyle.navImageHeight
  },
  rightItemStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: commonStyle.navBtnWidth,
  },
  rightBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: commonStyle.navBtnWidth,
    height: commonStyle.navContentHeight,
  },
  rightTitleStyle: {
    fontSize: commonStyle.navRightTitleFont,
    color: commonStyle.navRightTitleColor
  }
})
