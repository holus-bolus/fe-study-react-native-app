import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

type GoalInputProps = {
  placeholder?: string;
  onAddGoal: (enteredGoalText: string) => void;
  addGoalHandler: (enteredGoalText: string) => void;
  visible: boolean;
  onCancel: () => void;
};

const GoalInput = ({
  placeholder,
  onAddGoal,
  visible,
  onCancel,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#888888"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add the goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderColor: "#ffffff",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    color: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    width: "33%",
    marginHorizontal: 10,
  },
});
