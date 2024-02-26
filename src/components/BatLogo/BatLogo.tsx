import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import batLogo from '../../../assets/batman.png'

export function BatLogo() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image
            source={batLogo}
            style={styles.image}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#E5BF3C',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // or 'cover', 'stretch', 'repeat', 'center'
  },
});
