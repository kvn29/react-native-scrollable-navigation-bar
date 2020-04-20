import * as React from 'react';
import {Platform, Dimensions} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import CustomScrollView, {CustomScrollViewProps} from './CustomScrollView';
import {STATUS_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT} from '../constants';
import Context from './Context';

const {height} = Dimensions.get('window');

type SearchContainerProps = {
  children?: React.ReactNode;
  style?: object;
  contentContainerStyle?: object;
};

type SearchContainerState = {
  active: boolean;
};

class SearchContainer extends React.Component<
  CustomScrollViewProps,
  SearchContainerState
> {
  static contextType = Context;

  animatedValue = new Animated.Value(0);

  state = {active: false};

  onFocus() {
    this.setState({active: true});
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 100,
      easing: Easing.linear,
    }).start();
  }

  onBlur() {
    this.setState({active: false});
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 100,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const {children, contentContainerStyle} = this.props;
    const {active} = this.state;
    const {headerHeight} = this.context;

    const translateStyle = {
      transform: [
        {
          translateY: Animated.multiply(
            STATUS_BAR_HEIGHT - headerHeight,
            this.animatedValue,
          ),
        },
      ],
    };

    const customStyle = {
      containerStyle: [translateStyle, {height}],
      style: Platform.OS === 'ios' ? {overflow: 'visible'} : {},
    };

    return (
      // @ts-ignore
      <CustomScrollView
        {...this.props}
        // @ts-ignore
        scrollEnabled={!active}
        {...customStyle}>
        <React.Fragment>
          <Animated.View
            pointerEvents="none"
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: Animated.multiply(this.animatedValue, 0.5),
              backgroundColor: 'black',
            }}
          />
          {children}
        </React.Fragment>
      </CustomScrollView>
    );
  }
}

export default SearchContainer;
