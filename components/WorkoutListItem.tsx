// WorkoutListItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WorkoutListItemProps {
  name: string;
  date: string;
  distance: string;
}

const WorkoutListItem: React.FC<WorkoutListItemProps> = ({ name, date, distance }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
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
