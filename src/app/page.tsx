"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";
import { Card } from "@/components/card";
import { getData } from "../api";

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

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Card />
      </div>
    </main>
  );
}
