import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Regulamento from '../telas/Regulamento';
import Feedback from '../telas/Feedback';
import Entrar from '../telas/Entrar/Entrar';
import EntrarEscolha from '../telas/Entrar/EntrarEscolha';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Entrar"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="EntrarEscolha" component={EntrarEscolha} />
        <Stack.Screen name="Regulamento" component={Regulamento} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}