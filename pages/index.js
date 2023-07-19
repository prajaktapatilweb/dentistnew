import Head from 'next/head';
import HomeHero from '../components/home/hero';
import { MainLayout } from '../components/layout';
import HomeNewsLetter from '../components/home/newsletter';
import Countdown from '../components/home/Countdown';
import Clinicinfo from '../components/home/Clinicinfo';
import HomePopularCourse from '../components/home/popular-courses';
import HomeFeature from '../components/home/feature';
import Drsudnya from '../components/home/Drsudnya';
import HomeOurMentors from '../components/home/mentors';
import Photogallery from '../components/home/photo-gallery';
import Equipment from '../components/home/Equipment';
import Faq from '../components/home/Faq';
import Degreesection from '../components/home/Degreesection';
// import styles from '../styles-1/Home.module.css';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Countdown />
      <Clinicinfo />
      <HomePopularCourse />
      <HomeFeature />
      <Drsudnya />
      <HomeOurMentors />
      <Photogallery />
      <Equipment />
      <Faq />
      <HomeNewsLetter />
      <Degreesection />


    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

