import React, {  } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";
import DogListItem from "./DogListItem";


// Function for creating doglist and render components
const DogList = ({ data }) => {
    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS == "ios" ? "padding" : "height"}
            {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
            contentContainerStyle={{flex: 1}}
            keyboardVerticalOffset={0}
            style={styles.container}
        >
            <FlatList style={styles.list} data={data} renderItem={({item, index, separators}) => <DogListItem item={item} />} keyExtractor={item => item} numColumns={3} />
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