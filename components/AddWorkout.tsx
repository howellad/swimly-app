import React from 'react';
import { Alert, Button, ButtonProps, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface WorkoutFormProps {

}

export interface WorkoutData {
    name: string;
    age: number;
    date: Date;
}

export default function AddWorkoutFormComponent() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const setDate = (event: DateTimePickerEvent, date: Date) => {
        const {
            type,
            nativeEvent: { timestamp, utcOffset },
        } = event;
    };

    const [modalVisible, setModalVisible] = React.useState(false);

    const handleSubmission = () => {
      // Handle your form submission logic here
      console.log("closing modal");
      // Close the modal
      setModalVisible(false);  
    };
    return (
        <SafeAreaView style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Workout Name"
                value={text}
                keyboardType="default"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Distance"
                keyboardType="numeric"
            />
            <RNDateTimePicker
                mode="date"
                style={styles.input}
                //onChange={setDate}
                value={new Date()}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmission}>
                <Text style={styles.buttonText} >Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        width: "100%",
        padding: 25,
    },
    input: {
        height: 45,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '100%'
    },
    label: {
        paddingBottom: 6,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
        width: "100%"
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      }
});
