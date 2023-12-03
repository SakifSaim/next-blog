'use client'

import { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.bubble.css'

const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [valu, setValu] = useState(false)

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            height={32}
            width={32}
            className={styles.pluseBtn}
          />
        </button>
        {/* if btn click */}
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={32} height={32} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={32} height={32} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={32} height={32} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={valu}
          onChange={setValu}
          placeholder="Tell your story...."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage
