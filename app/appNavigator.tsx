// AppNavigator.tsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabLayout from './(tabs)/_layout';
import WorkoutEntryScreen from './addworkoutscreen';

const AppNavigator = createStackNavigator(
  {
    Home: TabLayout,
    AddWorkout: WorkoutEntryScreen,
  },
  {
    initialRouteName: 'AddWorkout',
  }
);

export default createAppContainer(AppNavigator);
