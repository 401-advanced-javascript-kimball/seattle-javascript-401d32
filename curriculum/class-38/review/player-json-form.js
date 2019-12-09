import React, {useState, useEffect} from 'react';
import Form from 'react-jsonschema-form';

import schema from '../schema.json';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

let PlayerForm = props => {

  const [formData, setFormData] = useState(props.initialValues || {});

  useEffect( () => {
    setFormData(props.initialValues);
  }, [props.initialValues]);

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={props.onSubmit}
    />
  );
};

export default PlayerForm;
