// WorkoutListItem.tsx
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';

interface WorkoutListItemProps {
  id: number;
  name: string;
  date: string;
  distance: string;
}

const handleDetailsPress = () => {
  const navigation = useNavigation<NavigationStackProp>();
  navigation.navigate('./workoutdetailsscreen.tsx');
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
    paddingVertical: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    width: "100%"
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
