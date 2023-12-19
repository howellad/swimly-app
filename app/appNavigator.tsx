// AppNavigator.tsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabLayout from './(tabs)/_layout';
import WorkoutEntryScreen from './addworkoutscreen';
import TabOneScreen from './(tabs)';
import WorkoutTabScreen from './(tabs)/workouts';
import ProfileScreen from './(tabs)/profile';
import EditProfileScreen from './editprofilescreen';

const AppNavigator = createStackNavigator(
  {
    Home: TabLayout,
    AddWorkout: WorkoutEntryScreen,
    Workouts: WorkoutTabScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
