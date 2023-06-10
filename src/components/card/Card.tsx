import { useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { PanInfo, motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'

export enum eSwipe {
  liked = 'liked',
  disliked = 'disliked',
}

export interface iCard {
  job_name: string | null,
  hours: string | null,
  department: string | null,
  seniority: string | null,
  company_name: string | null,
  company_url: string | null,
  post_url: string | null,
  tags_matched: string[] | null,
  tag_categories: string[] | null,
  job_location: string,
  city: string | null,
  region: string | null,
  country: string | null,
  last_indexed: string | null,
}

interface Props {
  card: iCard,
  removeCard: (card: iCard, swiped: eSwipe) => void,
  active: boolean,
}

const swipePower = (offset: any, velocity: any) => Math.abs(offset) * velocity;

export const Card = ({ card, removeCard, active }: Props) => {
  const [isSwipingOut, setIsSwipingOut] = useState(false);
  const [isLiked, setIsLiked] = useState<eSwipe>(eSwipe.disliked);
  const [direction, setDirection] = useState(0);
  const swipeOutVariants = {
    exit: {
      x: direction,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }

  console.log(card);
  if (card.job_name === null) {
    card.job_name = 'Name less :('
  }

  const x = useMotionValue(card.job_name.length % 2 == 0 ? 4 : -4)
  const rotate = useTransform(x, [-600, 600], [-16, 16])

  const onDragEnd = (event: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe > 300) {
      console.log('liked')
      setDirection(600);
      setIsLiked(eSwipe.liked)
      
    }

    if (swipe < -300) {
      console.log('disliked')
      setDirection(-600);
      setIsLiked(eSwipe.disliked)
    }
  }

  useEffect(() => {
    if (direction !== 0)
      setIsSwipingOut(true)
  }, [direction])

  useEffect(() => {

  })

  return (
    <>
      {
        !isSwipingOut &&
        <motion.li
          className={styles.card}
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={onDragEnd}
          dragElastic={1}
          initial={{
            scale: 1,
          }}
          transition={{
            duration: .6,
            times: [0, .6, 1]
          }}
          variants={swipeOutVariants}
          style={{
            x,
            rotate
          }}
          onAnimationComplete={() => {
            if (isSwipingOut) {
              removeCard(card, isLiked);
            }
          }}
          exit="exit"
        >
          <div className={styles.content}>
          <h2>{card.job_name}</h2>
          <div className={styles.details}>
          <span>{`Company: ${card.company_name}`}</span>
          <span>{`Country: ${card.country}`}</span>
          </div>
          

          </div>
         
        </motion.li>

      }
    </>
  )
}


// city
// : 
// "Warsaw"
// company_name
// : 
// "Point72"
// company_url
// : 
// "point72.com"
// country
// : 
// "Poland"
// department
// : 
// null
// hours
// : 
// null
// job_location
// : 
// "Warsaw"
// job_name
// : 
// "Software Engineer, Middle Office Systems (Trade Processing)"
// last_indexed
// : 
// "2023-06-09 03:11:43"
// post_url
// : 
// "boards.greenhouse.io/point72/jobs/6751066002"
// region
// : 
// null
// remote
// : 
// null
// seniority
// : 
// null