import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.19.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.desc}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          doloremque dicta dolor qui architecto consectetur. Voluptate eum
          quaerat officiis cumque, temporibus facere ipsum consectetur sunt
          corporis placeat dolores sequi, modi non magni nesciunt voluptatum
          pariatur?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
