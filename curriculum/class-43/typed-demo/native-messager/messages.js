import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, View, Text, Button, FlatList } from 'react-native';

import { actions } from './store';

const Messages = (props) => {
  useEffect(() => {
    props.subscribeToMessages();
    props.fetchMessages();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Messages</Text>
      <FlatList
        data={props.messages}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return <Text>{item.text} {item.createdAt}</Text>
        }}
      />
      <Button
        title="Send Message"
        onPress={() => {
          props.socket.emit('POST_MESSAGE', 'Test Message');
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
});

const mapStateToProps = (state) => ({
  messages: state.messages,
  socket: state.socket,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(actions.fetchMessages()),
  subscribeToMessages: () => dispatch(actions.subscribeToMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);