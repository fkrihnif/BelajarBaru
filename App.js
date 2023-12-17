/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={{backgroundColor: '#8e44ad', padding: 20}}>
        React Native Style
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'black',
  },
  container: {
    backgroundColor: '#3498db',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
