### install expo app: 
https://docs.expo.dev/tutorial/create-your-first-app/

-npx create-expo-app appname
-cd appname
-npx expo install react-dom react-native-web @expo/webpack-config


### react-native Navigation
https://reactnavigation.org/docs/getting-started/

-npm install @react-navigation/native
-npx expo install react-native-screens 
-npm i react-native-safe-area-context
-npm install @react-navigation/stack
-npx expo install react-native-gesture-handler  //again

### Drawer Navbar
https://reactnavigation.org/docs/drawer-navigator/#installation

-npm install @react-navigation/drawer
-npm install react-native-gesture-handler react-native-reanimated

### Bottom Navigator
https://reactnavigation.org/docs/bottom-tab-navigator/
## how to style the bottom navbar?
<Tab.Navigator
  screenOptions={{
    tabBarStyle: { position: 'absolute' },
  }}
>

## react-native reamimated
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
-npx expo install react-native-gesture-handler react-native-reanimated

  plugins: [
      ...
      'react-native-reanimated/plugin',
    ],


### most important thing when we create a one page of the navigation sections the flex:1 is very important for example: Main2.js ===> otherwise the bottom navbar shows at top of the screen