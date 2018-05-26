import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

// import { incrementAction, decrementAction } from "../Actions/actionCreator";

class LoginView extends Component {
  static navigationOptions = {
    title: '公告'
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
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
       <Text>这是公告页面</Text>
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

const Login = connect()(LoginView);

export default Login;
