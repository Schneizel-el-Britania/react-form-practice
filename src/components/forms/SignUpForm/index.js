import React from 'react';
import { SIGN_UP_SCHEMA } from '../../../utils/schemaValidation';
import AuthFormContainer from '../AuthFormContainer';
import InputContainer from '../InputContainer';
import RadioContainer from '../RadioContainer';
import CheckboxContainer from '../CheckboxContainer';
import styles from './SignUpForm.module.scss'
import Heading from '../../Heading';
import classNames from 'classnames';
// import classNames from 'classnames';

const initialValues = {
  email: '',
  password: '',
}

export default function SignInForm() {
  const subHeaderClasses = classNames(
    styles.subHeader,
    'col-10'
  )

  const onSubmit = (values, formikBab) => {
    console.log('values:', values)
    formikBab.resetForm();
  }
  return (
    <AuthFormContainer
      initForm={{ initialValues: initialValues, onSubmit, validationSchema: SIGN_UP_SCHEMA }}
      header={<Heading
        h2={{ className: styles.header, text: "create an account" }}
        h3={{ className: subHeaderClasses, text: "We always keep your name and email address private." }}
      />}
      submitText="create account">
      {<>
        <div className={styles.inputWrapper}>
          <InputContainer name="firstName" placeholder="First name" />
          <InputContainer name="lastName" placeholder="Last name" />
        </div>
        <div className={styles.inputWrapper}>
          <InputContainer name="displayName" placeholder="Display name" />
          <InputContainer name="email" placeholder="Email address" />
        </div>
        <div className={styles.inputWrapper}>
          <InputContainer name="password" placeholder="Password" type="password" />
          <InputContainer name="passwordConfirm" placeholder="Password confirmation" type="password" />
        </div>
        <RadioContainer name="radio" desc={{
          mainText: "Join As a Buyer",
          subText: "I am looking for a Name, Logo or Tagline for my business, brand or product."
        }} />
        <RadioContainer name="radio" desc={{
          mainText: "Join As a Creative or Marketplace Seller",
          subText: "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
        }} />
        <CheckboxContainer
          desc="Allow Squadhelp to send marketing/promotional offers from time to time" />
      </>}
    </AuthFormContainer>
  )

}
