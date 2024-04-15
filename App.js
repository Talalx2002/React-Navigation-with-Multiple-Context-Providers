import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./Components/screen1.js";
import Screen2 from "./Components/Screen2.js";
import Screen3 from "./Components/Screen3.js";
import Screen4 from "./Components/screen4.js";
import Context1 from "./Components/Data";
import Context2 from "./Components/Data2";

const Stack = createNativeStackNavigator();

export default function App() {
  const [Registration, setRegistration] = useState("FA20-BCS-029");
  const [Name, setName] = useState("Talal");
  const [city, setCity] = useState("Abbottabad");
  const [country, setCountry] = useState("KPK");

  return (
    <Context1.Provider value={{ Registration, setRegistration, Name, setName }}>
      <Context2.Provider value={{ city, setCity, country, setCountry }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Screen1} />
            <Stack.Screen name="Profile" component={Screen2} />
            <Stack.Screen name="City" component={Screen3} />
            <Stack.Screen name="Country" component={Screen4} />
          </Stack.Navigator>
        </NavigationContainer>
      </Context2.Provider>
    </Context1.Provider>
  );
}
