import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <Text style={styles.greeting}>👋 Hi,</Text>
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.appName}>AwesomeGallery</Text>
    </View>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 24,
    color: '#555',
    marginBottom: 4,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0a84ff',
  },
});
