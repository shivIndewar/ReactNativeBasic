import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import { useState } from "react";
import  GoalItem  from "./components/NewGoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCoutseGoals] = useState([]);
  const [isModalVisible, setvisibleModelState] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCoutseGoals(currentCourceGoals => [...currentCourceGoals,{text :enteredGoalText, id: Math.random().toString()}]);
    endGoalHandler();
  }
  
  function addVisibilityModelHandler() {
    setvisibleModelState(true);
  }

  function deleteHandler(id) {
    setCoutseGoals(currentCourceGoals =>{
        return currentCourceGoals.filter((goal)=> goal.id !== id);
    });
    
  }

  function endGoalHandler() {
    setvisibleModelState(false);
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
      <Button title='Add New Goal!' color='#a065ec' onPress={addVisibilityModelHandler} />
      <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} cancelGoal={endGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
            return <GoalItem text={itemData.item.text} onDeleteitem={deleteHandler} 
                              id={itemData.item.id}  /> ;
        }}
        keyExtractor={(item, index)=>{
          return item.id
        }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   flex :1,
   paddingTop : 5,
   paddingHorizontal: 16,
   backgroundColor:'#1e085a'
  },
 goalsContainer :{
  flex : 4
 }
});
