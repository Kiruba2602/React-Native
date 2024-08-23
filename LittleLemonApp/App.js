import * as React from 'react';
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/SectionList';
import LoginPage from './components/LoginPage';
import FeedbackPage from './components/FeedbackPage';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#495E57' }}>
        <LittleLemonHeader />
        <LoginPage />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
