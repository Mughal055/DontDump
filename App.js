import 'react-native-gesture-handler';
import Index from './src/navigation/Index';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
