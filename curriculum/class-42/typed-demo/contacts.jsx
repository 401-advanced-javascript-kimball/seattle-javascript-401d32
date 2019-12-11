import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, Linking } from 'react-native';
import { Container, Icon, List, Text, Title, Header, Body, Button, Toast } from 'native-base';
import * as ExpoContacts from 'expo-contacts';

import { actions } from './store';

const Contacts = (props) => {

  const showUrl = async () => {
    const url = await Linking.getInitialURL();
    Toast.show({
      text: url,
      buttonText: 'Go Away!',
      duration: 3000
    })
  }

  const showContacts = async () => {
    const contactsList = await ExpoContacts.getContactsAsync();
    props.setContacts(contactsList.data);
  }

  const call = contact => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(isSupported => Linking.openURL(link))
      .catch(console.error);
  }
  return (
    <Container style={styles.container}>
      <Header>
        <Body>
          <Title>Check Contacts!</Title>
        </Body>
      </Header>
      <Button light onPress={showUrl}>
        <Text>Show Url</Text>
      </Button>
      <Button light onPress={showContacts}>
        <Icon name="keypad" />
        <Text>Show Contacts</Text>
      </Button>
      <List
        dataArray={props.contactsData}
        keyExtractor={(item) => item.id}
        renderRow={(item) => {
          return (
            <Button style={styles.button} onPress={() => call(item)}>
              <Text>{item.name}</Text>
            </Button>
          )
        }}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  button: {
    margin: 5,
  }
});

const mapStateToProps = (state) => ({
  contactsData: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  setContacts: (data) => dispatch(actions.setContacts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);