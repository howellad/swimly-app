import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import WorkoutList from '../../components/WorkoutList';

export default function WorkoutTabScreen() {
  return (
    <View style={styles.container}>
      <WorkoutList></WorkoutList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
