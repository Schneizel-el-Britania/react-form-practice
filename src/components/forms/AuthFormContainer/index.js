import classNames from 'classnames';
import { Form, Formik } from 'formik'
import React from 'react'
import styles from './AuthFormContainer.module.scss'

export default function AuthFormContainer(props) {
  const { header, submitText, children, initialValues, onSubmit, validationSchema } = props;

  const formStyles = classNames(
    styles.form,
    'col-11 col-md-8 col-lg-7 col-xl-5'
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <div className='container'>
        <div className='row'>
          <Form className={formStyles}>
            <h2 className={styles.header}>{header}</h2>
            {children}
            <input className={styles.submit} type="submit" value={submitText} />
          </Form>
        </div>
      </div>
    </Formik>
  )
}
