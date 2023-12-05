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
import AdminLogin from '../telas/Admin - Login/AdminLogin';
import AdminHome from '../telas/Admin - Home/AdminHome';
import AdminAddQuadras from '../telas/Admin - AddQuadras/AdminAddQuadras';
import AdminAddSucesso from '../telas/Admin - AddSucesso/AdminAddSucesso';
import AdminReservasPendentes from '../telas/Admin - ReservasPendentes/AdminReservasPendentes';
import AdminHorariosQuadra from '../telas/Admin - HorariosQuadra/AdminHorariosQuadra';
import AdminEditarQuadra from '../telas/Admin - EditarQuadra/AdminEditarQuadra';
import AdminFormulario from '../telas/Admin - Formulário/AdminFormulario';
import AdminEnvioSucesso from '../telas/Admin - EnvioSucesso/AdminEnvioSucesso';

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

        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="AdminAddQuadras" component={AdminAddQuadras} />
        <Stack.Screen name="AdminAddSucesso" component={AdminAddSucesso} />
        <Stack.Screen name="AdminReservasPendentes" component={AdminReservasPendentes} />
        <Stack.Screen name="AdminHorariosQuadra" component={AdminHorariosQuadra} />
        <Stack.Screen name="AdminEditarQuadra" component={AdminEditarQuadra} /> 
        <Stack.Screen name="AdminFormulario" component={AdminFormulario} />
        <Stack.Screen name="AdminEnvioSucesso" component={AdminEnvioSucesso} />

        <Stack.Screen name="Regulamento" component={Regulamento} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}