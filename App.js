import Routes from './src/routes/routes';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nova-Round': require('./assets/fonts/NovaRound-Regular.ttf'),
    'Odibee-Sans': require('./assets/fonts/OdibeeSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Routes />
  );
}
