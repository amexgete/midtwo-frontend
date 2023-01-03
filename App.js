import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ContactScreen from "./Screens/ContactScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "HOME"}}
        />
        <Stack.Screen 
        
          name="About"
          component={AboutScreen}
          options={{title: "ABOUT"}}
        />
        <Stack.Screen 
          name="Contact"
          component={ContactScreen}
          //options={{headerShown: false}}
          options={{title: "CONTACT"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App