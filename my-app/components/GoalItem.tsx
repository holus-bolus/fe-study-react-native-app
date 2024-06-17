import { Text, View, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const GoalItem = ({ id, text, onDelete }: GoalItemProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#aeabab" }}
      onPress={() => onDelete(id)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#f5f5f5" : "#85cc0a",
        },
        styles.goalItem,
      ]}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#85cc0a",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
    color: "#fff",
  },
});
