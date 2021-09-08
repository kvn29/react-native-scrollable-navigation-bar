/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

import React from 'react';
import * as ReactNative from 'react-native';
import {
  Container,
  NavigationBar,
  HeaderTitle,
  Border,
  StatusBar,
  AppleStyle,
  constants,
  useAnimatedValue,
  useHasReachedTransitionPoint,
  useMeasurements,
  Transitioner,
  Appearer,
} from 'react-native-scrollable-navigation-bar';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...ReactNative,
  Container,
  AppleStyle,
  NavigationBar,
  HeaderTitle,
  Border,
  StatusBar,
  constants,
  useAnimatedValue,
  useHasReachedTransitionPoint,
  useMeasurements,
  Transitioner,
  Appearer,
  SearchBar,
  Ionicons,
};

export default ReactLiveScope;
