import classNames from 'classnames';
import { Form, Formik } from 'formik'
import React from 'react'
import styles from './AuthFormContainer.module.scss'

export default function AuthFormContainer(props) {
  const { header, children, initialValues, onSubmit } = props;

  const formStyles = classNames(
    styles.form,
    'col-10 col-md-8 col-lg-7 col-xl-5'
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className='container'>
        <div className='row'>
          <Form className={formStyles}>
            <h2 className={styles.header}>{header}</h2>
            {children}
            <input className={styles.submit} type="submit" value="login" />
          </Form>
        </div>
      </div>
    </Formik>
  )
}
