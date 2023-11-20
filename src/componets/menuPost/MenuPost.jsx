import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPost.module.css'

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel} `}>Travel</span>
          <h3 className={styles.postTitle}>
            Inventorty Item code not opening. Properly
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mainul Khan</span>
            <span className={styles.date}> - 15.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture} `}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Inventorty Item code not opening. Properly
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mainul Khan</span>
            <span className={styles.date}> - 15.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.inv} `}>Inventory</span>
          <h3 className={styles.postTitle}>
            Inventorty Item code not opening. Properly
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mainul Khan</span>
            <span className={styles.date}> - 15.11.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.grn} `}>GRN</span>
          <h3 className={styles.postTitle}>
            Inventorty Item code not opening. Properly
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mainul Khan</span>
            <span className={styles.date}> - 15.11.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPost
