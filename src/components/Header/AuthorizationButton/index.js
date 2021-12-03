import React from 'react';
import styles from './AuthorizationButton.module.scss'

export default function AuthorizationButton() {
  const pathname = window.location.pathname.substring(1);
  const relocateValue = pathname === "signin" ? "signup" : "signin";

  return (
    <a className={styles.authButton} href={relocateValue}>{relocateValue}</a>
  )
}

