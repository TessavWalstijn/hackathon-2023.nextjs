import Image from 'next/image'
import styles from './page.module.scss'
import { Card } from '@/components/card'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Card />
      </div>
    </main>
  )
}

