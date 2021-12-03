import React from 'react';
import styles from './AuthorizationButton.module.scss'

export default function AuthorizationButton() {
  const onSignIn = window.location.pathname === "/signin";
  const relocatePath = onSignIn ? "signup" : "signin";
  const authText = onSignIn ? "Sign up" : "Sign in"

  return (
    <a className={styles.authButton} href={relocatePath}>{authText}</a>
  )
}

