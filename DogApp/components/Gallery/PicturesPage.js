import React from "react";
import {SafeAreaView, Text, StyleSheet, FlatList, Image} from "react-native";

import { getAllPicturesByBreed } from "../../service/apiService";


class PicturesPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pictures: []
        };
    }

    async componentDidMount(){
        const pics = await getAllPicturesByBreed(this.props.route.params.breed);
        if (pics) this.setState({pictures: pics});
    }

    renderGrid () {
        if (this.state.pictures && this.state.pictures.length > 0 ) {
            return <FlatList data={this.state.pictures} 
                        renderItem={({item}) => <Image style={styles.image} source={{uri: item}} /> } 
                        keyExtractor={item => item} 
                        numColumns={4} 
                    />
        }
        return null;
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
               {this.renderGrid()} 
            </SafeAreaView>
        )
        
    }
}



export default PicturesPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        flex: 1,
        aspectRatio: 1,
    }
})