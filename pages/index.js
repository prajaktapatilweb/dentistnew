import Head from 'next/head';
import HomeHero from '../components/home/hero';
import { MainLayout } from '../components/layout';
import HomeNewsLetter from '../components/home/newsletter';
// import styles from '../styles-1/Home.module.css';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeNewsLetter />
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

