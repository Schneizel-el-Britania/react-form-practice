import React from 'react';
import { Form, Formik } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/schemaValidation';
import Heading from '../../Heading';
import AuthFormContainer from '../AuthFormContainer';
import CheckboxContainer from '../CheckboxContainer';
import InputContainer from '../InputContainer';
import Submit from '../Submit';
import styles from './SignInForm.module.scss';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
}

export default function SignInForm() {
  const onSubmit = (values, formikBab) => {
    console.log('values:', values)
    formikBab.resetForm();
  }

  return (
    <AuthFormContainer>
      <Heading h2={{ className: styles.header, text: "login to your account" }} />
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}>{
        (errors) => <Form>
          <InputContainer name="email" placeholder="Email address" err={errors} />
          <InputContainer name="password" placeholder="Password" type="password" err={errors} />
          <div className={styles.rememberPwdContainer}>
            <CheckboxContainer name="rememberMe" desc="remember me" />
            <a href="#" className={styles.restorePwd}>forgot password</a>
          </div>
          <Submit value={"login"} />
        </Form>
      }</Formik>
    </AuthFormContainer>
  );
}
