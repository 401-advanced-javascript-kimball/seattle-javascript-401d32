import React, { useState } from 'react';
// import uuid from 'uuid/v4';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="text">Text</label>
        <Field name="text" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'message',
})(MessageForm);
