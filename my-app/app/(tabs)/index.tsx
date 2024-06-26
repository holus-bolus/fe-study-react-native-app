import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

interface Goal {
  id: string;
  text: string;
}

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(36).substr(2, 9), text: enteredGoalText },
    ]);
    setModalIsVisible(false);
    setEnteredGoalText("");
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const deleteGoalHandler = (goalId: string) => {
    endAddGoalHandler();
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add a new goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput
          placeholder="Course Goal"
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDelete={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 5,
  },
});
