import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";

import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// import { incrementAction, decrementAction } from "../Actions/actionCreator";

var netimg = [
    'http://static.houdafs.com/static/data/photo/20180515131514.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131428.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131417.jpg'
]

class Discover extends Component {

    static navigationOptions = {
    header: null,
    title: '发现页面'
  };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: "home",
      params: { name: "Home" }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  render() {
    // const { counterCount, incrementAction, decrementAction } = this.props;
        return (
          <View
            style={styles.wrap}>

           <Text>这是发现页面</Text>

          </View>
        );
  }


}

// const mapStateToProps = state => ({
//   counterCount: state.CounterReducer.counter
// });

// const mapDispatchToProps = {
//   incrementAction,
//   decrementAction
// };

const styles = StyleSheet.create({
    wrap:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    }


})

const LoginView = connect()(LoginView);

export default Discover;
