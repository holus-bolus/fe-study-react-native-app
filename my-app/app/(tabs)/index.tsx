import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function HomeScreen() {
  const goalInputHandler = (enteredText: any) => {
    console.log(enteredText);
  };
  const addGoalHandler = () => {
    console.log("Button was pressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add the course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add the goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  goalsContainer: {
    flex: 3,
  },
});
