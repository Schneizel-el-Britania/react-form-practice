import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './InputContainer.module.scss'

export default function InputContainer(props) {
  const { name, ...rest } = props;
  return (
    <label className={styles.label}>
      <Field name={name} {...rest} className={styles.input} />
      <ErrorMessage name={name} component='div' className />
    </label>
  )
}
