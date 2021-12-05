import React from 'react';
import { SIGN_IN_SCHEMA } from '../../../utils/schemaValidation';
import AuthFormContainer from '../AuthFormContainer';
import CheckboxContainer from '../CheckboxContainer';
import InputContainer from '../InputContainer';
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
    <AuthFormContainer initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA}
      header="login to your account" submitText="login">
      {<>
        <InputContainer name="email" placeholder="Email address" />
        <InputContainer name="password" placeholder="Password" type="password" />
        <div className={styles.rememberPwdContainer}>
          <CheckboxContainer name="rememberMe" desc="remember me" />
          <a href="#" className={styles.restorePwd}>forgot password</a>
        </div>
      </>}
    </AuthFormContainer>
  )

}
