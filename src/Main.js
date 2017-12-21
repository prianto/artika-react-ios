import React from 'react';
import { Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Welcome from './containers/Welcome';
import Category from './containers/Category';
import Categories from './containers/Categories';
import Features from './containers/Features';
import Search from './containers/Search';
import More from './containers/More';
import SingleArticle from './containers/SingleArticle';
import SingleInfo from './containers/SingleInfo';
import Contact from './containers/Contact';

import { vars } from './common.style';

const stackNavigation = {
  Home: {
    screen: Welcome,
    path: '/',
  },
  Latest: {
    screen: Categories,
    path: '/categories',
  },
  Features: {
    screen: Features,
    path: '/features',
  },
  Search: {
    screen: Search,
    path: '/search',
  },
  More: {
    screen: More,
    path: '/more',
  }
}

const Tab = TabNavigator(
  stackNavigation,
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    configureTransition: (currentTransitionProps, nextTransitionProps) => ({
      timing: Animated.spring,
      tension: 1,
      friction: 35,
    }),
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: vars.dark,
      labelStyle: {
        fontSize: 13,
        marginBottom: 2,
      }
    },
  }
);

const Stack = StackNavigator(
  {
    Root: {
      screen: Tab
    },
    Category: {
      screen: Category,
      path: '/category'
    },
    Article: {
      screen: SingleArticle,
      path: '/article',
    },
    Info: {
      screen: SingleInfo,
      path: '/info',
    },
    Contact: {
      screen: Contact,
      path: '/contact',
    }
  }
);

export default Stack;
