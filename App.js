import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
//components
import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleStartAddNewGoal = () => {
    setModalIsVisible(true);
  };

  const handleEndAddNewGoal = () => {
    setModalIsVisible(false);
  };

  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = (goalInputValue) => {
    setCourseGoals((prev) => [
      ...prev,
      { text: goalInputValue, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const handleDeleteGoal = (id) => {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={handleAddGoal}
          onCancel={handleEndAddNewGoal}
        />
        <Button
          title="Add more goals"
          onPress={handleStartAddNewGoal}
          color="#b180f0"
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={handleDeleteGoal}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
