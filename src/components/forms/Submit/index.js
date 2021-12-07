import React from 'react';
import styles from './Submit.module.scss'

export default function Submit(props) {
  const { value } = props;
  return <input className={styles.submit} type="submit" value={value} />;
}
