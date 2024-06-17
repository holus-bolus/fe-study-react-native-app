import { Text, View, StyleSheet } from "react-native";
type GoalItemProps = {
  text: string;
};
const GoalItem = ({ text }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
