
import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    PixelRatio,
    Platform
} from 'react-native';

import FontSize from './tool/TextSize';
import Colors from './tool/Colors';
import { px2dp } from './tool/Tool';


 import { scaleSize, setSpText, deviceWidth, deviceHeight } from './tool'




 global.fixSize = scaleSize  // 适配尺寸
 global.fontSize = setSpText // 适配字体

const  { height, width } = Dimensions.get('window');


// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.Android === 'android');
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.ratio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / ratio;
// 适配字体
global.FONT_SIZE = FontSize;
// 用户登录状态
global.TOKEN = false;
// 用户ID
global.UID = 0;
// 屏幕适配
global.px2dp = px2dp;
// 常用颜色
global.COLORS = Colors;
