// ProfileScreen.tsx
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationStackProp>();

  const handleEditProfile = () => {
    // Navigate to the profile editing screen
    navigation.navigate('editprofilescreen');
  };

  return (
    <View style={styles.container}>
      {/* Display user information */}
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>John Doe</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>john.doe@example.com</Text>

        {/* Add more profile information as needed */}
      </View>

      {/* Edit Profile Button */}
      <Button title="Edit Profile" onPress={handleEditProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});
