import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../menuPost/MenuPost'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <nav className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      {/* =========================
      category section ============= */}
      <h2 className={styles.subtitle}>{'Discover by topic'}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* category List */}

      {/* Editor Pick section */}
      <h2 className={styles.subtitle}>{'Common Probelem fixes'}</h2>
      <h1 className={styles.title}>Admins Pick</h1>
      <MenuPost withImage={true} />
    </nav>
  )
}

export default Menu
