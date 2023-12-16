import React from 'react';
import { Alert, Button, ButtonProps, Pressable, StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface WorkoutFormProps {
    onSubmit: (data: WorkoutData) => void;
}

export interface WorkoutData {
    name: string;
    age: number;
    date: Date;
}

export default function AddWorkoutForm({ onSubmit }: WorkoutFormProps) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const setDate = (event: DateTimePickerEvent, date: Date) => {
        const {
            type,
            nativeEvent: { timestamp, utcOffset },
        } = event;
    };

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Workout Name"
                    value={text}
                />
                <RNDateTimePicker
                    mode="date"
                    //style={styles.input}
                    //onChange={setDate}
                    value={new Date()}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Distance"
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => setModalVisible(!modalVisible)}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    input: {
        flexWrap: "wrap",
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
