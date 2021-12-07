import React from 'react';
import { Form, Formik } from 'formik';
import classNames from 'classnames';
import AuthFormContainer from '../AuthFormContainer';
import InputContainer from '../InputContainer';
import RadioContainer from '../RadioContainer';
import CheckboxContainer from '../CheckboxContainer';
import Heading from '../../Heading';
import { SIGN_UP_SCHEMA } from '../../../utils/schemaValidation';
import styles from './SignUpForm.module.scss'
import Submit from '../Submit';

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  userType: "Buyer",
  termsConditions: false,
}

export default function SignInForm() {
  const subHeaderClasses = classNames(
    styles.subHeader,
    'col-10',
  )

  const onSubmit = (values, formikBab) => {
    console.log('values:', values)
    formikBab.resetForm();
  }

  return (
    <AuthFormContainer >
      <Heading
        h2={{ className: styles.header, text: "create an account" }}
        h3={{ className: subHeaderClasses, text: "We always keep your name and email address private." }}
      />
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_UP_SCHEMA}>{
        (errors) => <Form>
          <div className={styles.inputWrapper}>
            <InputContainer name="firstName" placeholder="First name" err={errors} />
            <InputContainer name="lastName" placeholder="Last name" err={errors} />
          </div>
          <div className={styles.inputWrapper}>
            <InputContainer name="displayName" placeholder="Display name" err={errors} />
            <InputContainer name="email" placeholder="Email address" err={errors} />
          </div>
          <div className={styles.inputWrapper}>
            <InputContainer name="password" placeholder="Password" type="password" err={errors} />
            <InputContainer name="passwordConfirm" placeholder="Password confirmation" type="password" err={errors} />
          </div>
          <RadioContainer name="userType" value="Buyer" desc={{
            mainText: "Join As a Buyer",
            subText: "I am looking for a Name, Logo or Tagline for my business, brand or product."
          }} />
          <RadioContainer name="userType" value="Creative" desc={{
            mainText: "Join As a Creative or Marketplace Seller",
            subText: "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
          }} />
          <CheckboxContainer name="termsConditions"
            desc="Allow Squadhelp to send marketing/promotional offers from time to time" />
          <Submit value="create account" />
        </Form>
      }</Formik>
    </AuthFormContainer>
  );
}
