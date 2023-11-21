import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/componets/cardList/CardList'
import Menu from '@/componets/Menu/Menu'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inventory Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
