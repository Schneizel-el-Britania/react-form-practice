import React from 'react';
import AuthFormContainer from '../AuthFormContainer';
import CheckboxContainer from '../CheckboxContainer';
import InputContainer from '../InputContainer';
import styles from './SignInForm.module.scss';

const initialValues = {

}

export default function SignInForm() {
  const onSubmit = (values, formikBab) => {

  }
  //  validationSchema={ }
  return (
    <AuthFormContainer initialValues={initialValues} onSubmit={onSubmit} header="login to your account">
      {<>
        <InputContainer type="email" name="email" placeholder="Email address" />
        <InputContainer type="password" name="password" placeholder="Password" />
        <div className={styles.rememberPwdContainer}>
          <CheckboxContainer desc="remember me" />
          <a href="#" className={styles.restorePwd}>forgot password</a>
        </div>
      </>}
    </AuthFormContainer>
  )

}
