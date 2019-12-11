import React, { useState, useEffect } from 'react';
import { Container, Text } from 'native-base';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';

import Contacts from './contacts';

import createStore from './store';
const store = createStore();

export default function App() {
  const [permissions, setPermissions] = useState(false);
  const [isLoaded, toggleLoaded] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  }
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      });
      toggleLoaded(true);
    }
    loadFont().then(getPermissions);
  }, []);

  if (!isLoaded) {
    return (
      <Container>
        <Text>Loading App</Text>
      </Container>
    )
  }

  return (
    <Provider store={store}>
      <Root>
        <Contacts />
      </Root>
    </Provider>
  );
}
