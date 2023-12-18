// WorkoutListItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface WorkoutListItemProps {
  id: number;
  name: string;
  date: string;
  distance: string;
}

const handleDetailsPress = () => {
  // do something here to navigate to the screen with id and get the whole details of the workout
  // Navigate to the workout details screen, replace 'WorkoutDetailsScreen' with your actual screen name
  //navigation.navigate('WorkoutDetailsScreen', { workoutId: name });
};

const WorkoutListItem: React.FC<WorkoutListItemProps> = ({ id, name, date, distance }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDetailsPress}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888888',
  },
  distance: {
    fontSize: 14,
    color: '#333333',
  },
});

export default WorkoutListItem;
