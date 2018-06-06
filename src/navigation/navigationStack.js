import { StackNavigator } from "react-navigation";
import Login from "../pages/login";

import Tab from '../pages/tab'
const navigator = StackNavigator({
  login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  tab: {
    screen: Tab,
    navigationOptions: {
      header: null,
    }
  }
}, {
  header: null,
  initialRoute: 'Login',  
});

export default navigator;
