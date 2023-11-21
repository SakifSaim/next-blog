import Menu from '@/componets/Menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {/* ====== Header Section ========= */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          {/* ========= user section ========== */}
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sakif Saim</span>
              <span className={styles.date}>12.09.2024</span>
            </div>
          </div>
        </div>
        {/* ==== Post Image Section ====== */}
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
