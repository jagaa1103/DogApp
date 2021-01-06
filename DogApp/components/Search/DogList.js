import React from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";
import DogListItem from "./DogListItem";


// Function for creating doglist and render components
class DogList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedItem: null,
            items: []
        };
    }



    setSelectedItem(item) {
        this.setState({selectedItem: item});
        this.props.onPress(item);
    }

    render() {
        return (
            // <KeyboardAvoidingView
            //     {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
            //     contentContainerStyle={{flex: 1}}
            //     keyboardVerticalOffset={0}
            //     style={styles.container}
            // >
                <FlatList 
                    style={styles.list} 
                    data={this.props.data} 
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.listItem} onPress={()=> this.setSelectedItem(item)} >
                            <DogListItem style={styles.listItem} item={item} />
                        </TouchableOpacity>
                    } 
                    extraData={this.state}
                    keyExtractor={item => item} 
                    numColumns={3}
                    keyboardShouldPersistTaps="always"
                />
            // </KeyboardAvoidingView>
        )
    }
}

export default DogList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    listItem: {
        flex: 1/3
    }
})