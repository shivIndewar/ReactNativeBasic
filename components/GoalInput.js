import { useState } from "react";
import {View,TextInput,Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText]=useState('');

    function  goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images-removebg-preview.png')}></Image>
                <TextInput style={styles.textInputStyle} placeholder='your course goal' 
                        onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWidth}>
                        <Button onPress={addGoalHandler} title="Add Goal!" color="#b180f0"></Button>
                    </View>
                    <View style={styles.buttonWidth}>
                        <Button title="Cancel" onPress={props.cancelGoal} color="#f31282" />
                    </View>
                    
                </View>            
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer :{
        flex :1,
        justifyContent: 'center',
        alignItems : 'center',
        padding : 10,
        backgroundColor:'#311b6b'
       },
       textInputStyle :{
        borderWidth : 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:'6',
        width:"100%",
        padding: 16,
       },
       buttonContainer:{
        flexDirection:'row',
        margin:16
       },
       buttonWidth :{
        width : '60%',
        marginHorizontal : 8
       },
       image :{
        width: 200,
        height: 200,
        margin: 20
       }
});