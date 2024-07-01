// components/ContactList.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DaftarTeman from './DaftarTeman';

const ContactList = () => {
  return (
    <View style={styles.container}>
      <DaftarTeman 
        gambar={require("../assets/pascol.jpg")}
        judul="PASCOL"
        telpon="0765535531"
      />
      <DaftarTeman 
        gambar={require("../assets/deankt.jpg")}
        judul="DEANKT"
        telpon="0765535531"
      />
       <DaftarTeman 
        gambar={require("../assets/windah.jpg")}
        judul="WINDAH"
        telpon="0929374237"
      />
       <DaftarTeman 
        gambar={require("../assets/pessi.jpg")}
        judul="PESSI"
        telpon="0324737463"
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

export default ContactList;
