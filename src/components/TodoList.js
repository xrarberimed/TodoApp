import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { deleteTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);
    const data = [
        {
            id: 1,
            title: "Learn React Native",
        },
        {
            id: 2,
            title: "Learn Redux Toolkit",
        },
    ]

    const onDelete = (id) => {
        dispatch(
            deleteTask({
                id: id,
            })
        )
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style= {styles.title}>{item.name}</Text>
                <TouchableOpacity style={styles.deleteButton}
                onPress={() => onDelete(item.id)}
                >
                   <Ionicons name="trash" size={30} color="#C1121F" />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View>
            <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default TodoList;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FDF0D5',
        padding: 20,
        marginVertical: 9,
        marginHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
    },
    delete: {
        fontSize: 20,
        color: '#C1121F'
    }

});