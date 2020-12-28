import React, {  } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";
import DogListItem from "./DogListItem";


// Function for creating doglist and render components
const DogList = (props) => {
    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS == "ios" ? "padding" : "height"}
            {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
            contentContainerStyle={{flex: 1}}
            keyboardVerticalOffset={0}
            style={styles.container}
        >
            <FlatList style={styles.list} data={props.data} renderItem={({item}) =>  <TouchableOpacity onPress={()=> props.onPress(item)}><DogListItem item={item} /></TouchableOpacity> } keyExtractor={item => item} numColumns={3} />
        </KeyboardAvoidingView>
    )
}

export default DogList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    }
})