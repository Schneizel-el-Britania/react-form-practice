import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './AuthorizationButton.module.scss'

export default function AuthorizationButton() {
  const path = useLocation().pathname;
  return (
    <Link
      to={path === "/signin" ? "signup" : "signin"}
      className={styles.authButton}>
      {path === "/signin" ? "Sign up" : "Sign in"}
    </Link>
  )
}
