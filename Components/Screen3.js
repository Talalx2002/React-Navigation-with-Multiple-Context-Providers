import React from 'react';
import { View, Text, StyleSheet, Button , TextInput} from 'react-native';
import  Context2  from './Data2.js';

export default function Screen3({navigation}) {
    const context = React.useContext(Context2);

    return (
        <View style={styles.container}>
      <Text>City:</Text>
      <TextInput placeholder="Enter your city" style={styles.input} value={context.city} onChangeText={context.setCity}/>
      <Text>Country:</Text>
      <TextInput placeholder="Enter your Country" style={styles.input}  value={context.country} onChangeText={context.setCountry}/>
            <Button
                title="Go to Screen 4"
                onPress={() => navigation.navigate("Country")}
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