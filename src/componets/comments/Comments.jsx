import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
  const status = 'authenticated'

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {/* == the input section -- */}
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write comment</Link>
      )}

      <div className={styles.comments}>
        {/*  old comment section  */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>20.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum animi deserunt ex, a reprehenderit placeat ducimus repellat,
            unde enim vitae nisi. Maiores vero recusandae porro perspiciatis
            maxime sit autem!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>20.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum animi deserunt ex, a reprehenderit placeat ducimus repellat,
            unde enim vitae nisi. Maiores vero recusandae porro perspiciatis
            maxime sit autem!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>20.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum animi deserunt ex, a reprehenderit placeat ducimus repellat,
            unde enim vitae nisi. Maiores vero recusandae porro perspiciatis
            maxime sit autem!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>20.05.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum animi deserunt ex, a reprehenderit placeat ducimus repellat,
            unde enim vitae nisi. Maiores vero recusandae porro perspiciatis
            maxime sit autem!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
