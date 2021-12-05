import { Field } from 'formik';
import React from 'react';
import styles from './CheckboxContainer.module.scss'

export default function CheckboxContainer(props) {
  const { desc, ...rest } = props;
  return (
    <label className={styles.checkbox}>
      <Field type="checkbox" {...rest} />
      {desc}
    </label>
  )
}
