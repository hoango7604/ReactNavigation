/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import ListMoviesScreen from './ListMoviesScreen';
import DetailMovieScreen from './DetailMovieScreen';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: ListMoviesScreen
        },
        Detail: {
            screen: DetailMovieScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default class App extends Component {
    render(){
        return <RootStack/>
    }
}