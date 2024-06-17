import { StyleSheet, View, FlatList } from "react-native";
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

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(36).substr(2, 9), text: enteredGoalText },
    ]);
    setEnteredGoalText("");
  };

  const deleteGoalHandler = (goalId: string) => {
    console.log("deleted");
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput
        placeholder="Course Goal"
        addGoalHandler={addGoalHandler}
        onAddGoal={addGoalHandler}
      />
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
