import React from 'react'
import {Text, View, Stylesheet, Button } from 'react-native';

const About =({navigation}) => {
return(
    <View>
      <Text>About Screen</Text>
      <Button title="Go back"  onPress={()=>navigation.goback()}/>
    </View>

);
};

export default About;