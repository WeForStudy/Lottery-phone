import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

// import { incrementAction, decrementAction } from "../Actions/actionCreator";

class Mylottery extends Component {
  static navigationOptions = {
    header: null,
    title: '我的页面'
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
          backgroundColor: "yellowgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
       <Text>这是我的彩票页面</Text>
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

const  Model = connect()(Mylottery);

export default Model;
