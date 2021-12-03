import React from 'react'
import AuthorizationButton from './AuthorizationButton'
import Logo from './Logo';
import styles from './Header.module.scss'
import classNames from 'classnames';

export default function Header() {
  const headerClasses = classNames(
    styles.header,
    'container',
  );
  const headerWrapperClasses = classNames(
    styles.headerWrapper,
    'col-12 col-md-8',
  );

  return (
    <header className={headerClasses}>
      <div className='row'>
        <div className={headerWrapperClasses}>
          <Logo />
          <AuthorizationButton />
        </div>
      </div>

    </header>
  )
}
