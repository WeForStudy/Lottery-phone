import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import { onLogin } from '../../services'
import { incrementAction, decrementAction } from "../../actions/actionCreator";

class LoginView extends Component {

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({
      routeName: "tab",
      params: { name: "from login" }
    });
    this.props.navigation.dispatch(navigateToScreen2);
  };
  componentWillMount() {
    //  试验api方法
    onLogin().then(res => console.log(res)).catch(err => console.log(err))
  }

  render() {
    const { counterCount, incrementAction, decrementAction } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
       <Text>这是登录页面</Text>
       <Text>这是redux里的值：{counterCount}</Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
          onPress={this.navigate}
        >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
            去首页
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
          onPress={incrementAction}
        >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
            加
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
          onPress={decrementAction}
        >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
            减
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;
