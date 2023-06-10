import Image from 'next/image'
import styles from './page.module.scss'
import { Card } from '@/components/card'
import { Button } from '@/components/button'



export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Swipe your way to your new job!</h1>
        <h4>Jobhunting made easy: select your level and expertise and swipe your way to the best companies for you. Use the button to select them for later!</h4>
      </div>
      <div className={styles.center}>
        <Card />
        <div className={styles.buttonRow}>
          <Button
          iconClass="fa-solid fa-xmark fa-3x"
          /> 
          <i className="fa-kit fa-squeeble-circle fa-6x"></i>
          <Button iconClass="fa-solid fa-check fa-3x"/>
        </div>
      </div>
    </main>
  )
}

