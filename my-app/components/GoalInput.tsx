import { Button, TextInput, View, StyleSheet } from "react-native";

type GoalInputProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  addGoalHandler?: () => void;
};

const GoalInput = ({
  placeholder,
  onChangeText,
  value,
  addGoalHandler,
}: GoalInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
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
