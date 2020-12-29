import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import Components
import SearchPage from "./components/Search/SearchPage";
import PicturesPage from "./components/Gallery/PicturesPage";
import PictureDetail from "./components/Gallery/PictureDetail";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Pictures" component={PicturesPage} />
        <Stack.Screen name="PictureDetail" component={PictureDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;