import { Field } from 'formik';
import React from 'react';
import styles from './CheckboxContainer.module.scss'

export default function CheckboxContainer(props) {
  const { desc, name, ...rest } = props;
  return (
    <label className={styles.checkbox}>
      <Field type="checkbox" name={name} {...rest} />
      {desc}
    </label>
  )
}
