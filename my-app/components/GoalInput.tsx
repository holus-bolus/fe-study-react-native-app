import { Button, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

type GoalInputProps = {
  placeholder?: string;
  addGoalHandler?: (enteredGoalText: string) => void;
  onAddGoal: (enteredGoalText: string) => void;
};

const GoalInput = ({ placeholder, onAddGoal }: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add the goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
