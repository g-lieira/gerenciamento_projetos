import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Regulamento from '../telas/Aluno - Regulamento/Regulamento';
import Feedback from '../telas/Feedback';
import Entrar from '../telas/Entrar/Entrar';
import EntrarEscolha from '../telas/Entrar/EntrarEscolha';
import AlunoLogin from '../telas/Aluno - Login/AlunoLogin';
import AlunoHome from '../telas/Aluno - Home/AlunoHome';
import AlunoMinhasReservas from '../telas/Aluno - MinhasReservas/AlunoMinhasReservas';
import AlunoHorariosQuadra from '../telas/Aluno - HorariosQuadra/AlunoHorariosQuadra';
import AlunoFormulario from '../telas/Aluno - Formulario/AlunoFormulario';
import AlunoEnvioSucesso from '../telas/Aluno - EnvioSucesso/AlunoEnvioSucesso';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Entrar"
        screenOptions={{
          headerShown: false,
          animation: 'fade', 
        }}
      >
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="EntrarEscolha" component={EntrarEscolha} />
        <Stack.Screen name="AlunoLogin" component={AlunoLogin} />
        <Stack.Screen name="AlunoHome" component={AlunoHome} />
        <Stack.Screen name="AlunoMinhasReservas" component={AlunoMinhasReservas} />
        <Stack.Screen name="AlunoHorariosQuadra" component={AlunoHorariosQuadra} />
        <Stack.Screen name="AlunoFormulario" component={AlunoFormulario} />
        <Stack.Screen name="AlunoEnvioSucesso" component={AlunoEnvioSucesso} />


        <Stack.Screen name="Regulamento" component={Regulamento} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}