/**
 * Created by guangqiang on 2017/8/27.
 */

/** 设备信息 **/

import {Dimensions, Platform} from 'react-native'

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export default deviceInfo = {
  // 设备宽度
  deviceWidth: Dimensions.get('window').width,
  // 设备高度
  deviceHeight: Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height - 24,
  isIphoneX: (
      Dimensions.get('window').width === X_WIDTH && Dimensions.get('window').height === X_HEIGHT
    ) || (
      Dimensions.get('window').width === XSMAX_WIDTH && Dimensions.get('window').height === XSMAX_HEIGHT
  ),
  // 设备系统
  deviceOS: Platform.OS,
  // 当前config: debug \ release
  mode: __DEV__ ? 'xdebug' : 'release'
}