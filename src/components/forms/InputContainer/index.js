import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './InputContainer.module.scss'
import classNames from 'classnames';

export default function InputContainer(props) {
  const { name, err, ...rest } = props;

  const inputClasses = classNames(
    styles.input,
    (err.errors[name] && err.touched[name]) ? styles.inputError : undefined,
  )

  return (
    <label className={styles.label}>
      <Field name={name} {...rest} className={inputClasses} />
      <ErrorMessage name={name} component='div' className={styles.error} />
    </label>
  )
}
