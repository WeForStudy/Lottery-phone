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
import Swiper from 'react-native-swiper'
// import { incrementAction, decrementAction } from "../Actions/actionCreator";

const netimg = [
    'http://static.houdafs.com/static/data/photo/20180515131514.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131428.jpg',
    'http://static.houdafs.com/static/data/photo/20180515131417.jpg',
]
class Hall extends Component {
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
    const styles = StyleSheet.create({
      wrap:{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center"
      },
        double_chromosphere:{
          position:'absolute',
          top:175,right:(SCREEN_WIDTH-(SCREEN_WIDTH*0.95))*0.5,
          width:SCREEN_WIDTH*0.95,
          height:px2dp(150),
          backgroundColor:'pink',
          borderRadius:px2dp(10),
      }
  
  
  })
    return (
      <View
          style={styles.wrap}>
          <View style={{height:200}}>
              <Swiper height={100} autoplay={true}>
                  {this.renderImg()}
              </Swiper>
          </View>
         <View  style={styles.double_chromosphere}>
              

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





// const mapStateToProps = state => ({
//   counterCount: state.CounterReducer.counter
// });

// const mapDispatchToProps = {
//   incrementAction,
//   decrementAction
// };

const Model = connect()(Hall);

export default Model;
