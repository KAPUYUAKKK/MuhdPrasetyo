import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Daftar Teman"
        onPress={() => navigation.navigate('ContactList')}
        fontSize={20} // Atur ukuran font di sini
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default Home;
