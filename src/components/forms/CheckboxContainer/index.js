import React from 'react';
import styles from './CheckboxContainer.module.scss'

export default function CheckboxContainer(props) {
  const { desc } = props;
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      {desc}
    </label>
  )
}
