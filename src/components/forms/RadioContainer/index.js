import { Field } from 'formik';
import React from 'react';
import styles from './RadioContainer.module.scss'

export default function RadioContainer(props) {
  const { desc, name, value, ...rest } = props;
  return (
    <div className={styles.radioContainer}>
      <label className={styles.radioInnerContainer}>
        <div>
          <Field className={styles.radio} type="radio" name={name} value={value} {...rest} />
        </div>
        <div>
          <h3 className={styles.mainText}>{desc.mainText}</h3>
          <p className={styles.subText}>{desc.subText}</p>
        </div>
      </label>
    </div>

  )
}
