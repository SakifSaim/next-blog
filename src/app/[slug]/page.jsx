import Menu from '@/componets/Menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/componets/comments/Comments'

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
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
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
      {/* next section  */}
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              asperiores deserunt similique vero quidem ullam necessitatibus
              nulla voluptas dignissimos? Veritatis incidunt at voluptate iusto
              molestiae?
            </p>
            <h2 className={styles.subtitle}>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quam, soluta nisi dolore ducimus dolorum voluptatem,
              fugiat maiores non possimus temporibus voluptates, est ratione
              quas molestias.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              quo qui saepe libero impedit vitae accusantium possimus animi,
              cumque, exercitationem ipsa dignissimos corporis, non magni.
            </p>
          </div>
          <div className={styles.commnet}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
