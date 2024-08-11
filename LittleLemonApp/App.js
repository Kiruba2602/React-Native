import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={{}}>
      <LittleLemonHeader />
      <MenuItems />
      <LittleLemonFooter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#495e57',
  },
})

