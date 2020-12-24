/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

class App extends React.Component {

  // when the App component initialized
  constructor(){
    super();
    // initializing state in component
    this.state = { 
      dogList: [],
      isLoading: false,
    };
  }

  // App component is mounted to the app
  componentDidMount(){
    // for showing loading animation during fetch data from API
    this.setState({isLoading: true});
    // first time fetching data from API
    this.fetchDogList();
  }
  
  // Fetch dog breeds from API
  fetchDogList () {
    // request data by url
    fetch("https://dog.ceo/api/breeds/list")
      // when success data fetching from API
      .then(response => response.json())
      // when successfully parsed data
      .then(json => {
        if (json.status === "success") {
          this.setState({isLoading: false, dogList: json.message});
          console.log(this.state);
        }
        else {
          console.log("cannot loaded data");
        }
      })
      // when error happened during fetch and parse data
      .catch(error => console.error(error.message));
  }


  // render the component
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
