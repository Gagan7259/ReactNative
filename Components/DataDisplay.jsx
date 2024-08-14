import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

import Goalinput from "./Example1/GoalInput";
function DataDisplay() {
  const [CourseGoals, setCourseGoals] = useState([]);
  function GoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={{ padding: 20 }}>
      <Goalinput onAddGoal={GoalHandler} />
      <FlatList
        data={CourseGoals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goaltext}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
      {/* <ScrollView >
        {CourseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goaltext}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goaltext: {
    color: "#FFFFFF",
  },
});

export default DataDisplay;
