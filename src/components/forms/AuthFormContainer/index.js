import React from 'react';
import classNames from 'classnames';
import styles from './AuthFormContainer.module.scss'

export default function AuthFormContainer(props) {
  const formContainerClasses = classNames(
    styles.formContainer,
    'col-11 col-md-8 col-lg-7 col-xl-5',
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className={formContainerClasses}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
