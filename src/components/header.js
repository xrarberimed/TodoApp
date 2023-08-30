import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice"

const Header = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            Alert.alert("You need to enter a task");
            setTodo("");
            return;
        }

        dispatch(
            addTask({
                task: todo,
            })
        );
        setTodo("");
        };
    
    return(
        <View>
            <Text style={styles.headerText}>Todo List</Text>

            <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Add Todo"
            onChangeText={setTodo}
            value={todo}
            />

            <TouchableOpacity style= {styles.button}
            onPress={onSubmitTask}>
                <Text style={styles.buttonText}>Add</Text>

            </TouchableOpacity>
            </View>
        </View>
    )

}
export default Header;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#003049'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    input:{
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '80%',
        borderRadius: 9,
        borderColor: 'gray'
    },
    button: {
        backgroundColor: '#003049',
        padding: 10,
        margin: 10,
        width: '80%',
        borderRadius: 7,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    }

})