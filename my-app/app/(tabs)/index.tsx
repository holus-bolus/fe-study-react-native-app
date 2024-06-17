import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { SetStateAction, useState } from "react";
interface Goal {
  id: string;
  text: string;
}
export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredText: SetStateAction<string>) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(36).substr(2, 9), text: enteredGoalText },
    ]);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add the course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add the goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View key={goal.id} style={styles.goalItem}>
            <Text>{goal.text}</Text>
          </View>
        ))}
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
    width: "80%",
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9c2ff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
  },
});
