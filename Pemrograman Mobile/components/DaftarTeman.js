// components/DaftarTeman.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DaftarTeman = ({ gambar, judul, telpon }) => {
  return (
    <View style={styles.contactContainer}>
      <Image source={gambar} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.phone}>{telpon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100, // Ubah lebar gambar sesuai kebutuhan
    height: 100, // Ubah tinggi gambar sesuai kebutuhan
    borderRadius: 50, // Untuk gambar bundar, sesuaikan dengan setengah dari lebar atau tinggi
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18, // Ukuran font judul
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16, // Ukuran font nomor telepon
  },
});

export default DaftarTeman;
