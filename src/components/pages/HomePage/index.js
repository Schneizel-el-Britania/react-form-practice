import React from 'react'
import Heading from '../../Heading'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <main>
      <Heading h1={{ text: "Home page!", className: styles.mainHeader }} />
    </main>
  )
}
