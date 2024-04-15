import React from 'react';
import { View, Text, TextInput, StyleSheet,Button } from 'react-native';
import Context2 from './Data2.js';

export default function Screen4({navigation}) {
    const context = React.useContext(Context2);


    const updateContext = () => {
        // Call the update methods from your context here
        context.setCity('Lahore');
        context.setCountry('PUNJAB');
      };

      
    return (
        <View style={styles.container}>
            <Text>City:</Text>
            <TextInput
                style={styles.input}
                value={context.city}
                onChangeText={context.setCity}
            />
            <Text>Province:</Text>
            <TextInput
                style={styles.input}
                value={context.country}
                onChangeText={context.setCountry}
            />
        <Button
            title="Update"
            onPress={updateContext}
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        width: 200,
        marginBottom: 10,
    },
});