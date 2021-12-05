import classNames from 'classnames';
import { Form, Formik } from 'formik'
import React from 'react'
import styles from './AuthFormContainer.module.scss'

export default function AuthFormContainer(props) {
  const { header, submitText, children } = props;
  const { initialValues, onSubmit, validationSchema } = props.initForm;

  const formContainerClasses = classNames(
    styles.formContainer,
    'col-11 col-md-8 col-lg-7 col-xl-5',
  );

  const subHeaderClasses = classNames(
    styles.subHeader,
    'col-10'
  )

  return (
    <div className='container'>
      <div className='row'>
        <div className={formContainerClasses}>
          {header && <div>
            {header.mainHeader && <h2 className={styles.header}>{header.mainHeader}</h2>}
            {header.subHeader && <h3 className={subHeaderClasses}>{header.subHeader}</h3>}
          </div>}
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
              {children}
              <input className={styles.submit} type="submit" value={submitText} />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
