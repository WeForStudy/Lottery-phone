import React, { Component } from "react"
import { connect } from "react-redux"
import { addNavigationHelpers } from "react-navigation"
import NavigationStack from './navigationStack'

class AppNavigation extends Component {

    // componentDidMount() {
    //     this.mounted = true;
    // }
    //
    // componentWillUnmount() {
    //     this.mounted = false;
    // }
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack

      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.NavigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);
