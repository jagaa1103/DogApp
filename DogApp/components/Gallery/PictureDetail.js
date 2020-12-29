import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";

class PictureDetail extends React.Component {
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.route.params.item}} />
            </SafeAreaView>
        )    
    }
    
}

export default PictureDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    }
})
