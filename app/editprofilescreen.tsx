// EditProfileScreen.tsx
import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

export default function EditProfileScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation<NavigationStackProp>();
  const handleSaveChanges = () => {
    // Save changes (you can add logic to update user data)
    console.log('Changes saved:', { name, email });

    // Navigate back to the profile screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* Editable fields */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Save Changes Button */}
      <Button title="Save Changes" onPress={handleSaveChanges} />
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
  formGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
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

