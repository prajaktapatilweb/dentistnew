import Head from 'next/head';
// import dynamic from 'next/dynamic'
import { Suspense, lazy } from "react";
// const HomeHero = lazy(() => import('../components/home/hero'))
// const MainLayout = lazy(() => import('../components/layout'))
// const HomeNewsLetter = lazy(() => import('../components/home/newsletter'))
// const Countdown = lazy(() => import('../components/home/Countdown'))
// const Clinicinfo = lazy(() => import('../components/home/Clinicinfo'))
// const HomePopularCourse = lazy(() => import('../components/home/popular-courses'))
// const HomeFeature = lazy(() => import('../components/home/feature'))
// const Drsudnya = lazy(() => import('../components/home/Drsudnya'))
const HomeOurMentors = lazy(() => import('../components/home/mentors'))
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
// const Equipment = lazy(() => import('../components/home/Equipment'))
// const Faq = lazy(() => import('../components/home/Faq'));
// const Degreesection = lazy(() => import('../components/home/Degreesection'));
import { MainLayout } from '../components/layout';
import HomeHero from '../components/home/hero';
import HomeNewsLetter from '../components/home/newsletter';
import Countdown from '../components/home/Countdown';
import Clinicinfo from '../components/home/Clinicinfo';
import HomePopularCourse from '../components/home/popular-courses';
import HomeFeature from '../components/home/feature';
import Drsudnya from '../components/home/Drsudnya';
// import HomeOurMentors from '../components/home/mentors';
// import Photogallery from '../components/home/photo-gallery';
import Equipment from '../components/home/Equipment';
import Faq from '../components/home/Faq';
import Degreesection from '../components/home/Degreesection';
import styles from '../styles-1/Home.module.css';

export default function Home() {
  return (
    <>
      <HomeHero />

      <Countdown />
      <Clinicinfo />
      <HomePopularCourse />
      <HomeFeature />
      <Drsudnya />
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <HomeOurMentors />
        <Photogallery />
      </Suspense>
      <Equipment />
      <Faq />
      <HomeNewsLetter />
      <Degreesection />

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

