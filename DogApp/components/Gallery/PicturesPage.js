import React from "react";
import {SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity, RefreshControl} from "react-native";

import { getAllPicturesByBreed } from "../../service/apiService";


class PicturesPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pictures: []
        };

        this.mounted = false;
    }

    async componentDidMount(){
        this.getPictures();
        this.mounted = true;
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    async getPictures() {
        const pics = await getAllPicturesByBreed(this.props.route.params.breed);
        if (this.mounted && pics) this.setState({pictures: pics});
    }

    renderGrid () {
        if (this.state.pictures && this.state.pictures.length > 0 ) {
            return <FlatList data={this.state.pictures} 
                        renderItem={ ({item}) =>
                            <TouchableOpacity key={item} style={styles.selectPicture} onPress={()=> this.props.navigation.push('PictureDetail', {item: item})}>
                                <Image style={styles.image} source={{uri: item}} />
                            </TouchableOpacity> 
                        } 
                        keyExtractor={item => item} 
                        numColumns={4}
                    />
        }
        return null;
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
               {/* {this.renderGrid()}  */}
               <FlatList data={this.state.pictures} 
                        renderItem={ ({item}) =>
                            <TouchableOpacity key={item} style={styles.selectPicture} onPress={()=> this.props.navigation.push('PictureDetail', {item: item})}>
                                <Image style={styles.image} source={{uri: item}} />
                            </TouchableOpacity> 
                        } 
                        keyExtractor={item => item} 
                        numColumns={4}
                />
            </SafeAreaView>
        )
        
    }
}



export default PicturesPage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    selectPicture: {
        flex: 1,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
    }
})