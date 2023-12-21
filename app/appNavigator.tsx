// AppNavigator.tsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabLayout from './(tabs)/_layout';
import WorkoutEntryScreen from './addworkoutscreen';
import WorkoutTabScreen from './(tabs)/workouts';
import ProfileScreen from './(tabs)/profile';
import EditProfileScreen from './editprofilescreen';
import WorkoutDetailsScreen from './workoutdetailsscreen';
import EditWorkoutScreen from './editworkoutscreen';

const AppNavigator = createStackNavigator(
  {
    Home: TabLayout,
    AddWorkout: WorkoutEntryScreen,
    Workouts: WorkoutTabScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen,
    WorkoutDetails: WorkoutDetailsScreen, 
    EditWorkoutScreen: EditWorkoutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
