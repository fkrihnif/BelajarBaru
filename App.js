import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import ImgPemandangan from './images/1.jpeg';

export default function App() {
  return (
    <View>
      <Image
        source={ImgPemandangan}
        style={{width: '100%', height: '50%'}}></Image>
      <Image
        source={{
          uri: 'https://tokofikri.com/frontend/assets/images/fikri/logoputih.png',
        }}
        style={{width: '50%', height: '50%'}}></Image>
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
