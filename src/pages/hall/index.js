import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity




} from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

// import { incrementAction, decrementAction } from "../Actions/actionCreator";
var Swiper = require('react-native-swiper');


var netimg = [
    'http://static.houdafs.com/static/data/photo/20180515131514.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131428.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131417.jpg',


]

class LoginView extends Component {
  // static navigationOptions = {
  //   header: null,
  //   title: '首页'
  // };

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
          <View style={{height:200}}>
              <Swiper height={100} autoplay={true}>
                  {this.renderImg()}
              </Swiper>
          </View>
         <View  style={styles.daletou}>


         </View>


       
      </View>
    );
  }

    renderImg() {
        var imageViews = [];
        for (var i = 0; i < netimg.length; i++) {
            imageViews.push(
                <Image
                    key={i}
                    style={{ height:200,backgroundColor:'pink'}}
                    // source={{uri:netimg[i]}}
                    source={require('../../assets/img/sihjiebei.jpg')}
                />
            );
        }
        return imageViews;
    }
}



const styles = StyleSheet.create({
    wrap:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    daletou:{
        width:SCREEN_WIDTH,
        height:px2dp(60),
        backgroundColor:'pink'
    }


})

// const mapStateToProps = state => ({
//   counterCount: state.CounterReducer.counter
// });

// const mapDispatchToProps = {
//   incrementAction,
//   decrementAction
// };

const Login = connect()(LoginView);

export default Login;
