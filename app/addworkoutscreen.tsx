// WorkoutEntryScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const WorkoutEntryScreen: React.FC = () => {
  const [workoutName, setWorkoutName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [caloriesBurned, setCaloriesBurned] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleSaveWorkout = () => {
    // Handle saving the workout data
    console.log('Workout saved:', {
      workoutName,
      date,
      duration,
      distance,
      caloriesBurned,
      notes,
    });

    // Optionally, navigate to a different screen or perform other actions
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Workout Name</Text>
        <TextInput
          style={styles.input}
          value={workoutName}
          onChangeText={(text) => setWorkoutName(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={(text) => setDate(text)}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Duration (minutes)</Text>
        <TextInput
          style={styles.input}
          value={duration}
          onChangeText={(text) => setDuration(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Distance (km)</Text>
        <TextInput
          style={styles.input}
          value={distance}
          onChangeText={(text) => setDistance(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Calories Burned</Text>
        <TextInput
          style={styles.input}
          value={caloriesBurned}
          onChangeText={(text) => setCaloriesBurned(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.input}
          value={notes}
          onChangeText={(text) => setNotes(text)}
          multiline
        />
      </View>

      <Button title="Save Workout" onPress={handleSaveWorkout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  }, 
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default WorkoutEntryScreen;