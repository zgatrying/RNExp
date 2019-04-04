
# Todo List

- [x] 初始化项目
- [x] 配置typescript环境
- [x] 配置app图标与启动图，引入react-native-splash-screen依赖
- [x] 引入react-navigation管理路由
- [ ] 引入mobx，管理应用状态
- [ ] 封装fetch工具类，用于网络接口请求
- [x] 封装导航组件
- [x] 配置常用的导航结构与视图
- [x] 添加NavigationService服务，提供导航功能。

常用功能

- [ ] 列表的下拉刷新、上拉加载。

## ts编译问题

- 无法写入文件xxx, 因为它会覆盖输入文件

    tsconfig.json
    ```
    "compilerOptions": {
        "noEmit": true 
    }
    ```
## react-native 打包问题

开发时rn代码与资源都是通过热加载的方式注入到app中的，但是为了发布到应用市场，还是要进行打包让用户安装后能直接使用的。

rn项目常用的打包流程如下：

**第一步，配置package.json**

```
"build-ios": "react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/main.jsbundle --assets-dest ./ios",
"build-android": "react-native bundle --entry-file index.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
```

ps: 项目中没有发现assets目录的，新建一个assets文件夹。

**第二步，配置ios与android平台js资源。**

ios平台：配置./ios/{app_name}/AppDelegate.m文件的jsCodeLocation变量
```
#ifdef DEBUG
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"ios/main" withExtension:@"jsbundle" ];
#endif
```

android平台：js资源放在main/assets文件夹下，图片等其他资源放在main/res文件夹下。

**第三步，打包**

ios
```
yarn build-ios
```

open xcode -> 
change scheme to generic ios Device -> 
select Product -> Archive

android
```
yarn build-android
```

open Android studio ->
select Build -> generate Signed Apk

## xcode编译问题处理方法

- third-party config.h can not found

    - In the Terminal, navigate to the react-native/third-party/glog folder inside node_modules (for me, this was cd node_modules/react-native/third-party/glog-0.3.4)
    - Once actively in this folder, run ../../scripts/ios-configure-glog.sh
    - Glog is configured and the required config.h header file is created for Xcode to find
- xcode 10 libfishhook.a not found
    - projectName/Libraries/RCTWebSocket.xcodeproj
    - Targets -> RCTWebSocket
    - Link Binary With Libraries
    - add libfishhook.a
- libSplashScreen.a error
    - projectName -> build Phases
    - Link Binary With Libraries
    - remove libSplashScreen.a
    - add libSplashScreen.a