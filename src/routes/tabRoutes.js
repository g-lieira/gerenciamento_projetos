import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Regulamento from '../telas/Regulamento';
import Feedback from '../telas/Feedback';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return(
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: {
          fontWeight: "400",
          fontSize: 15,
          fontFamily: 'Nova-Round',
        },
        tabBarLabelPosition: "beside-icon",
        tabBarInactiveTintColor: '#FFDF12',
        tabBarActiveTintColor: '#F7CEE5',
      }}
    >
      <Tab.Screen
        name='regulamento'
        component={Regulamento}
        options={{
          tabBarLabel: 'Regulamento',
        }}
      />

      <Tab.Screen
        name='feedback'
        component={Feedback}
        options={{
          tabBarLabel: 'Feedback',
        }}
      />
    </Tab.Navigator>
  )
}