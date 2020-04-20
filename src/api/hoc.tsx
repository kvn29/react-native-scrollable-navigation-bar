import * as React from 'react';
import Animated, {Extrapolate} from 'react-native-reanimated';

export function scaleable(
  Node: React.ReactNode,
  animatedValue: Animated.Value<number>,
) {
  return (
    <Animated.View
      // @ts-ignore
      style={{
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [-10, 0],
              outputRange: [1.3, 1],
              extrapolateRight: Extrapolate.CLAMP,
            }),
          },
        ],
      }}>
      {Node}
    </Animated.View>
  );
}

export function disappear(
  Node: React.ReactNode,
  animatedValue: Animated.Value<number>,
  start: number,
  end: number,
  shouldDisappear = true,
) {
  if (!shouldDisappear) return Node;
  return (
    <Animated.View
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [1, 0],
          extrapolate: Extrapolate.CLAMP,
        }),
      }}>
      {Node}
    </Animated.View>
  );
}

export function appear(
  Node: React.ReactNode,
  animatedValue: Animated.Value<number>,
  start: number,
  end: number,
  shouldAppear = true,
) {
  if (!shouldAppear) return Node;
  return (
    <Animated.View
      pointerEvents="box-none"
      style={{
        zIndex: 9999,
        opacity: animatedValue.interpolate({
          inputRange: [start, end],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP,
        }),
      }}>
      {Node}
    </Animated.View>
  );
}
