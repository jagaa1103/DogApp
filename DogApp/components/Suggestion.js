import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Suggestion = (props) => {
    
    return (
        <FlatList data={props.data} renderItem={({item, index, separators}) => <ListItem item={item} onPress={()=> props.onPress(item)} />} keyExtractor={item => item} />
    )
}

export default Suggestion;

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        borderBottomWidth: 0.3,
        backgroundColor: "#ecf0f1",
        height: 40,
    },

    text: {
        fontSize: 20,
    }
});