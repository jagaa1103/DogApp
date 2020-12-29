import React from 'react';
import { SafeAreaView, StatusBar, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import DogList from './DogList';
import { fetchBreedList } from "../../service/apiService";
import Suggestion from "./Suggestion";
import DogListItem from "./DogListItem";

class SearchPage extends React.Component {

  // when the App component initialized
  constructor(){
    super();
    // initializing state in component
    this.state = { 
      dogList: [],
      inputText: "",
      filteredDogList: [],
      fullInput: "",
      selectedItem: null
    };
  }

  // App component is mounted to the app
  async componentDidMount(){
    // first time fetching data from API
    const breedList = await fetchBreedList();
    this.setState({dogList: breedList});
  }
  
  // render suggestion of input
  renderSuggestion(){
    if (!this.state.fullInput && this.state.filteredDogList && this.state.filteredDogList.length > 0) {
      return <Suggestion data={this.state.filteredDogList} onPress={(item)=> this.setState({fullInput: item})} />
    }
    return null;
  }
  // input text change event handler function
  inputChanged(text) {
    this.setState({inputText: text, fullInput: ""});
    this.state.dogList.forEach((dog) => {
      if (dog === text) {
        this.setState({fullInput: dog});
        return;
      }
    })
    const list = this.filterDogs(text);
    this.setState({filteredDogList: list});
  }

  filterDogs(text){
    if (!text || text.length < 1) return null;
    return this.state.dogList.filter(dog => dog.startsWith(text.toLowerCase()));
  }

  showPictures(breed) {
    this.props.navigation.push("Pictures", {breed: breed});
  }


  // render the component
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TextInput value={this.state.inputText} onChangeText={text => this.inputChanged(text)} style={styles.input} placeholder="insert here..." />
          <DogList data={this.state.filteredDogList} onPress={(breed)=> this.showPictures(breed)} />
        </SafeAreaView>
      </>
    );
  }
}

export default SearchPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  input: {
    height: 50,
    margin: 20,
    paddingLeft: 10,
    fontSize: 24,
    borderWidth: 0.3,
    borderColor: '#ecf0f1',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 6,
  },
  loadingField: {
    width: 100,
    height: 100,
  }
})