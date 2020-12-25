/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, TextInput, StyleSheet, Image } from 'react-native';

import DogList from './components/DogList';
import { fetchBreedList } from "./service/apiService";

class App extends React.Component {

  // when the App component initialized
  constructor(){
    super();
    // initializing state in component
    this.state = { 
      dogList: [],
      isLoading: false,
      inputText: "",
      filteredDogList: []
    };
  }

  // App component is mounted to the app
  async componentDidMount(){
    // for showing loading animation during fetch data from API
    this.setState({isLoading: true});
    // first time fetching data from API
    const breedList = await fetchBreedList();
    this.setState({isLoading: false, dogList: breedList});
  }
  
  //render list when data successfully fetched from API
  renderList(){
    if (this.state.filteredDogList && this.state.filteredDogList.length > 0) return <DogList data={this.state.filteredDogList} />
    return null;
  }

  inputChanged(text) {
    this.setState({inputText: text});
    const list = this.filterDogs(text);
    this.setState({filteredDogList: list});
  }

  filterDogs(text){
    if (!text || text.length < 1) return null;
    // return this.state.dogList.filter(dog => dog.includes(text.toLowerCase()));
    return this.state.dogList.filter(dog => dog.startsWith(text.toLowerCase()));
  }

  showLoading(){
    return this.state.isLoading ? <Image style={styles.loadingField} source={require("./images/dogrun.gif")} /> : null; 
  }


  // render the component
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          {this.showLoading()}
          <TextInput value={this.state.inputText} onChangeText={text => this.inputChanged(text)} style={styles.input} placeholder="insert here..." />
          {this.renderList()}
        </SafeAreaView>
      </>
    );
  }
}

export default App;


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