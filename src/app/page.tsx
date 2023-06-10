'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Card, eSwipe, iCard } from '@/components/card'
import { getData } from "../api"
import { Button } from '@/components/button'

interface TJobDescriptions {
  job_name: string;
  hours: string;
  department: string;
  seniority: string;
  remote: any;
  company_name: string;
  company_url: string;
  post_url: string;
  tags_matched: any[];
}

export default function Home() {
  const [cards, setCards] = useState<iCard[] | null>(null);
  const [saved, setSaved] = useState<iCard[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      const jobs =
        typeof window !== "undefined"
          ? window.localStorage.getItem("jobs")
          : null;

      if (jobs)
        setCards(JSON.parse(jobs).data as iCard[])
    };

    fetchData()
  }, []);

  useEffect(() => {
    if (cards?.length)
      setActiveIndex(cards.length - 1)
  }, [cards])

  const removeCard = (oldCard: iCard, swiped: eSwipe) => {
    if (!cards) return;

    if (swiped === eSwipe.liked) {
      saved === null ? setSaved([oldCard]) : setSaved([...saved, oldCard]);
    }

    const filteredCards = cards.filter(card => card.company_url !== oldCard.company_url)

    setActiveIndex(filteredCards.length - 1)
    setCards(filteredCards);
  }

  return (
    <main className={styles.main}>
      <div>
        <h1>Swipe your way to your new job!</h1>
      </div>
      <div className={styles.text}>
        <h4>Jobhunting made easy: select your level and expertise and swipe your way to the best companies for you. Use the button to select them for later!</h4>
      </div>
      <div className={styles.centerPart}>
        <ul className={styles.center}>
         {
           cards && cards.map((card, index) => (
              <Card
                key={card.job_name}
                card={card}
                removeCard={removeCard}
                active={index === activeIndex}
              />
            ))
          }
        </ul>
      </div>
      <div className={styles.buttonRow}>
        <Button
          iconClass="fa-solid fa-xmark fa-3x"
        />
        <i className="fa-kit fa-squeeble-circle fa-5x"></i>
        <Button
          iconClass="fa-solid fa-check fa-3x"
        />
      </div>
    </main>
  );
}
