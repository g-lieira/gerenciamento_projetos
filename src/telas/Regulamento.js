import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Regulamento({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Regulamento</Text>
      <Button
        onPress={() => navigation.navigate("Feedback")}
        title="Learn More"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
