'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import { Card, eSwipe, iCard } from '@/components/card'
import { useState } from 'react'

export default function Home() {
  const data = {
    "entry_count": 5,
    "message": "Success",
    "data": [
      {
        "job_name": "Engineer Trainee",
        "hours": "Full-Time",
        "department": null,
        "seniority": "Intern",
        "remote": "false",
        "company_name": "O-I",
        "company_url": "o-i.com",
        "post_url": "jobs.smartrecruiters.com/o-i/743999878180051",
        "tags_matched": [],
        "tag_categories": [],
        "job_location": "Lingedijk, Leerdam, Nederland",
        "city": "Leerdam",
        "region": "Utrecht",
        "country": "Netherlands",
        "last_indexed": "2023-05-29 01:03:42"
      },
      {
        "job_name": "Traineeship Sales Cybersecurity",
        "hours": "Full-Time",
        "department": "Sales",
        "seniority": "Intern",
        "remote": "false",
        "company_name": "ON2IT",
        "company_url": null,
        "post_url": "on2it.recruitee.com/o/traineeship-sales-cybersecurity",
        "tags_matched": [
          "WhatsApp",
          "Bel"
        ],
        "tag_categories": [
          "Programming Languages",
          "Messaging",
          "Communications",
          "OSS",
          "VoIP"
        ],
        "job_location": "Zaltbommel, New Brunswick, 4181 CE Netherlands",
        "city": "Zaltbommel",
        "region": "New Brunswick",
        "country": "Netherlands",
        "last_indexed": "2023-06-09 13:03:08"
      },
      {
        "job_name": "Cryptography Engineer Intern",
        "hours": "Intern",
        "department": "ENG",
        "seniority": "Intern",
        "remote": "false",
        "company_name": "Description Fortanix",
        "company_url": null,
        "post_url": "apply.workable.com/fortanix/j/10EC2AE511",
        "tags_matched": [
          "Microsoft",
          "Google",
          "PayPal",
          "Snowflake",
          "Intel",
          "Rust",
          "ServiceNow"
        ],
        "tag_categories": [
          "Big Data Tools",
          "Analytics",
          "IT Management",
          "Payment Gateway",
          "Compute",
          "PaaS",
          "App Definition and Development",
          "Database",
          "Cloud Management",
          "Payments",
          "Enterprise Software",
          "Helpdesk",
          "Enterprise Applications",
          "IaaS",
          "Software",
          "Programming Languages",
          "SaaS",
          "Cloud Computing",
          "Datastores",
          "OSS",
          "Accounting",
          "IT",
          "Infrastructure",
          "Sales & Marketing",
          "Apps",
          "Data Warehouses"
        ],
        "job_location": null,
        "city": "Eindhoven",
        "region": "North Brabant",
        "country": "Netherlands",
        "last_indexed": "2023-05-26 13:31:57"
      },
      {
        "job_name": "Junior Hardware Engineer (Dordrecht, Nederland)",
        "hours": "Full-Time",
        "department": null,
        "seniority": "Junior IC",
        "remote": "false",
        "company_name": "BESIX",
        "company_url": "besix.com",
        "post_url": "jobs.smartrecruiters.com/besix/743999833065884",
        "tags_matched": [],
        "tag_categories": [],
        "job_location": "Dordrecht, Nederland",
        "city": "Dordrecht",
        "region": "Dorset",
        "country": "Netherlands",
        "last_indexed": "2023-05-31 08:14:12"
      },
      {
        "job_name": "Junior Data & AI Engineer",
        "hours": "Full-Time",
        "department": "Technology",
        "seniority": "Junior IC",
        "remote": null,
        "company_name": "MIcompany",
        "company_url": "dataanalytics.career",
        "post_url": "micompany.recruitee.com/o/junior-data-ai-engineer",
        "tags_matched": [
          "Python",
          "Jenkins",
          "DataRobot",
          "Indeed",
          "Git",
          "Azure",
          "Airflow",
          "Dataiku",
          "Facebook"
        ],
        "tag_categories": [
          "Orchestration & Pipelines",
          "Datastores",
          "Enterprise Software",
          "Predictive Analytics",
          "App Definition and Development",
          "OSS",
          "Hardware",
          "Data Science Platforms",
          "Robotics",
          "AI",
          "Science and Engineering",
          "Analytics",
          "Software",
          "Version Control",
          "Workflow Management",
          "Compute",
          "Continuous Integration & Delivery",
          "IT",
          "ML Tools",
          "Stat Tools & Languages",
          "Career/Job-Hunting Services",
          "Data as a Service",
          "SaaS",
          "Advertising",
          "Hiring Data",
          "Programming Languages",
          "Social Media",
          "DevOps"
        ],
        "job_location": "Amsterdam, New Hampshire, 1017 HL Netherlands",
        "city": "Amsterdam",
        "region": "New Hampshire",
        "country": "Netherlands",
        "last_indexed": "2023-05-24 06:11:34"
      }
    ]
  }

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
  )
}

