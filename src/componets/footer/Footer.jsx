import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="IT-SupportLibrary"
            width={80}
            height={80}
          />
          <h1 className={styles.logoText}>IT-SupportLibrary</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium quisquam, pariatur consequatur, ratione modi at placeat
          laboriosam facilis eligendi tenetur natus fuga, aliquam laborum.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      {/*  Links footer menu */}
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        {/* tags */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Inventory</Link>
          <Link href="/">Production</Link>
          <Link href="/">Sales</Link>
          <Link href="/">Procuremnt</Link>
        </div>
        {/* socials */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">FaceBook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
