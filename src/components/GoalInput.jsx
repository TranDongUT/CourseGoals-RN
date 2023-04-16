import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [goalInputValue, setGoalInputValue] = useState("");

  const handleChangeGoalInputValue = (e) => {
    setGoalInputValue(e);
  };

  const handleAddGoal = () => {
    props.onAddGoal(goalInputValue);
    setGoalInputValue("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your course goal"
          value={goalInputValue}
          onChangeText={handleChangeGoalInputValue}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e0acc",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputText: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    backgroundColor: "#e4d0ff",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
