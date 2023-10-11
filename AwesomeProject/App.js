import { RegistrationScreen } from './Screens/auth/RegistrationScreen';
import { LoginScreen } from './Screens/auth/LoginScreen';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
     <>
      <StatusBar style="auto" />
         <RegistrationScreen />
      <LoginScreen />
    </>
  );
}

