import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.inv} `}
      >
        Inventory
      </Link>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.pord} `}
      >
        Production
      </Link>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.sales} `}
      >
        Sales
      </Link>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.delivery} `}
      >
        Delivary
      </Link>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.accounts} `}
      >
        Accounts
      </Link>
      <Link
        href="/blog?cat=inv"
        className={`${styles.categoryItem} ${styles.po} `}
      >
        Procurement
      </Link>
    </div>
  )
}

export default MenuCategories
