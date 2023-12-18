// YourListComponent.tsx
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import WorkoutListItem from './WorkoutListItem';

const WorkoutList: React.FC = () => {
  const data = [
    { id: '1', name: 'Morning Run', date: '2023-01-01', distance: '5 km' },
    { id: '2', name: 'Evening Walk', date: '2023-01-02', distance: '3 km' },
    // Add more workout data as needed
  ];

  const renderItem = ({ item }) => (
    <WorkoutListItem id={item.id} name={item.name} date={item.date} distance={item.distance} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default WorkoutList;
