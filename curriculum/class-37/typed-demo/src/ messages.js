import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import Form from 'react-jsonschema-form';

import MessageForm from './message-form';

import actions from './store/messages/messages-actions';
import schema from './schema.json';

const Messages = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (form) => {
    props.handlePost(form.formData);
  }

  const reduxFormHandler = (formData) => {
    props.handlePost(formData);
  }

  return (
    <div>
      <ul>
        {props.messages.map((message, idx) => <li key={idx}>{message.text}</li>)}
      </ul>
      {/* <Form
        schema={schema}
        formData={{ id: uuid(), text: "test", createdAt: new Date().toString(), userId: uuid() }}
        onSubmit={handleSubmit}
      /> */}
      <MessageForm
        onSubmit={reduxFormHandler}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  messages: state.messages,
})

const mapDispatchToProps = (dispatch) => ({
  handlePost: (message) => dispatch(actions.post(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);