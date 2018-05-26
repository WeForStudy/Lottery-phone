import { StackNavigator } from "react-navigation";
// import Screen1 from "../pages/screen1";
// import Screen2 from "../pages/screen2";
import Login from "../pages/login";

import Tab from '../pages/tab'
const navigator = StackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  // screen1: {
  //   screen: Screen1
  // },
  // screen2: {
  //   screen: Screen2
  // },
  tab: {
    screen: Tab,
    navigationOptions: {
      header: null,
    }
  }
}, {
  header: null,
});

export default navigator;
