import { View, Text, StyleSheet } from 'react-native';


export default function App() {
  console.log('App running')
  let x = 1;


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world! This is a longer text to demonstrate text wrapping.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensures the container takes the full width of the screen
    paddingHorizontal: 20, // Optional: adds padding to the sides
  },
  text: {
    textAlign: 'center', // Center text within the Text element
  },
});
