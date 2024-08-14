import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"

function Goalinput() {
    const [enteredGoalText, setenteredText] = useState("");
    function GoalInputHandler(enteredtext) {
        setenteredText(enteredtext);
    }

    function addGoalHandler(enteredtext) {
        props.onAddGoal(enteredtext)
        setenteredText('')
    }
    return
    (<View style={styles.inputcontainer}>
        <TextInput
            style={styles.textinput}
            placeholder="enter Text"
            onChangeText={GoalInputHandler}
        />
        < Button title="Add Goal" onPress={addGoalHandler} />
    </View>)

}
export default Goalinput
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textinput: {
        borderWidth: 1,
        backgroundColor: "#CCCCCC",
        width: "70%",
        marginRight: 8,
        padding: 8
    }
})
