'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import { Card, eSwipe, iCard } from '@/components/card'
import { getData } from "../api"

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
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      const jobs =
      typeof window !== "undefined"
        ? window.localStorage.getItem("jobs")
        : false;
    };
    
    fetchData()
  }, []);

  const [cards, setCards] = useState<iCard[]>(data.data as iCard[]);
  const [saved, setSaved] = useState<iCard[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(cards.length - 1)

  const removeCard = (oldCard: iCard, swiped: eSwipe) => {
    if (swiped === eSwipe.liked) {
      saved === null ? setSaved([oldCard]) : setSaved([...saved, oldCard]);
    }

    const filteredCards = cards.filter(card => card.company_url !== oldCard.company_url)

    setActiveIndex(filteredCards.length - 1)
    setCards(filteredCards);
  }

  return (
    <main className={styles.main}>
      <ul className={styles.center}>
        {
          cards.map((card, index) => (
            <Card
              key={card.job_name}
              card={card}
              removeCard={removeCard}
              active={index === activeIndex}
            />
          ))
        }
      </ul>
    </main>
  );
}
