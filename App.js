import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateLimits = () => {
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum <= 0) {
      Alert.alert('Invalid input', 'Please enter a valid age.');
      return;
    }
    const lower = ((220 - ageNum) * 0.65).toFixed(0);
    const upper = ((220 - ageNum) * 0.85).toFixed(0);
    setLowerLimit(lower);
    setUpperLimit(upper);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <View style={styles.results}>
        <Text>Limits</Text>
        <Text>{lowerLimit}-{upperLimit}</Text>
      </View>
      <Button title="CALCULATE" onPress={calculateLimits} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});