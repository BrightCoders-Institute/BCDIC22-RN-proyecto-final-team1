import {ActivityIndicator, View } from 'react-native'
import React, { Component } from 'react'

export class LoadingScreen extends Component {
  render() {
    return (
        <View style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator 
                size={ 50 }
                color="black"
            />
        </View>
    )
  }
}

export default LoadingScreen