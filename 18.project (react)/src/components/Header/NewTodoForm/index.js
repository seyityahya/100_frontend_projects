import React from 'react'
import { Formik, Field, Form } from "formik"
import validationSchema from './validations';

function NewTodoForm() {
  return (
    <Formik 
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
      >
        <Form>
          <Field 
          className="new-todo"
          placeholder="what needs to be done?"
          autoFocus
          id="text"
          name="text"
          />
        </Form>     
    </Formik>
  )
}

export default NewTodoForm;