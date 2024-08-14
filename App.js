import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react'
import DataDisplay from './Components/DataDisplay';
export default function App() {
  // const [enteedGoaltext, setenteedGoaltext] = useState('')
  // const [couseGoals, setCoursestate] = useState([])


  const [CourseGoals, setCourseGoals] = useState([]);



}
function goalHandler() {
  // console.log(enteedGoaltext)
  setCoursestate(currentGoals => [...currentGoals, enteedGoaltext])
}
return (

  // <View style={styles.container}>
  //   <View>
  //     <Text style={styles.dummyText}>Never Settle One plus </Text>
  //   </View>
  //   <Text>Hello </Text>
  //   <Text style={[styles.blue, styles.red]}>Hello world</Text>
  //   <StatusBar style="auto" />
  //   <Button title='hello' />
  // </View>
  <SafeAreaView><View style={styles.apppadding}>
    <View>
      <Text>Hellor</Text>
    </View>
    <View style={styles.inputcontainer}><TextInput style={styles.textInput} placeholder='enter Your email' />
      <Button title='add Goal' />

    </View>
    <View>

      <Text>List of Goals...</Text>
    </View>

  </View>


    <SafeAreaView>

      {/* <View style={{
          padding: 40,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-between",
          alignItems: "stretch"
        }}>
          <View style={{
            backgroundColor: "red",
            flex: 1,
            // width: 100,
            // height: 100,
            justifyContent: "flex-start",
            alignItems: "center",
            margin: 3
          }}><Text >1</Text>

          </View>
          <View style={{
            backgroundColor: "blue",
            // width: 100,
            // height: 100,
            flex: 1,

            justifyContent: "space-between",
            alignItems: "center",
            margin: 3
          }}><Text>1</Text>

          </View>
          <View style={{
            backgroundColor: "blue",
            // width: 100,
            // height: 100,
            flex: 1,

            justifyContent: "space-between",
            alignItems: "center",
            margin: 3
          }}><Text>1</Text>

          </View>
          <View style={{
            backgroundColor: "yellow",
            // width: 100,
            // height: 100,
            flex: 1,

            justifyContent: "space-between",
            alignItems: "center",
            margin: 3
          }}><Text>1</Text>

          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ flexDirection: "column", alignItems: 'flex-end', backgroundColor: "red", width: 100, height: 100 }}>Hwllo</Text>
          </View>
        </View> */}
    </SafeAreaView>
    {/* <View>
        <Text>Hello</Text>
        <TextInput style={styles.textInput} placeholder='Enter Your mail' onChangeText={goalInputHandler} />
        <Button title='Goal' onPress={goalHandler} />
      </View>
      <View style={{ width: 1, color: "red" }}>
        {couseGoals.map((goal) => { <Text>{goal} Heklo</Text> })}
      </View> */}
    {/* <DataDisplay /> */}

  </SafeAreaView>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    borderColor: "red",
    borderRadius: 2,
    color: 'blue',
  }, red: {
    color: "red"
  },
  blue: {
    color: "blue"
  },
  apppadding: {
    paddingTop: 50,
    paddingHorizontal: 16,
    margin: 10
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    width: "70%",
    marginRight: 5,
    padding: 8
  }

});
