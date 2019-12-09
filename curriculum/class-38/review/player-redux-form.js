import React from 'react';
import { Field, reduxForm } from 'redux-form';

let PlayerForm = props => {

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="team">Team</label>
        <Field name="team" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'player',
})(PlayerForm);
