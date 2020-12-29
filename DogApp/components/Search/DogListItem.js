import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { getImageURL } from "../../service/apiService";

// DogListItem Component 
class DogListItem extends React.Component {
    constructor(){
        super();
        //initialize component state
        this.state = { url: null };
        this.mounted = false;
    }

    // when component mounted need to fetch image from API
    async componentDidMount() {
        this.mounted = true;
        // call to get image url from api service
        const url  = await getImageURL(this.props.item);
        if(this.mounted) {
            this.setState({url: url});
        }
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    // rendering image again when the image url changed in the state
    renderImage() {
        // if state's url is exist need to render image, if not need to render default image
        if (this.state.url) return <Image style={styles.image} source={{uri: this.state.url }} />;
        // return <Image style={styles.image} source={require("../images/dogicon.png")} />;
    }


    render() { 
        return (
            <View style={styles.container}>
                {this.renderImage()}
                <Text style={styles.text}>{this.props.item}</Text>
            </View>
        )
    }
}


// exports DogListItem function
export default DogListItem;

// styles of DogListItem
const styles = StyleSheet.create({
    container: {
        flex: 1 / 3,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    text: {
        flex: 1,
        padding: 5,
        fontSize: 16,
    }
});


