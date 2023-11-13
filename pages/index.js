import Head from 'next/head';
// import dynamic from 'next/dynamic'
import { Suspense, lazy } from "react";
// const Drsudnya = lazy(() => import('../components/home/Drsudnya'))
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
// const Degreesection = lazy(() => import('../components/home/Degreesection'));
import { MainLayout } from '../components/layout';
import HomeHero from '../components/home/hero';
import Countdown from '../components/home/Countdown';
import Clinicinfo from '../components/home/Clinicinfo';
import Drsudnya from '../components/home/Drsudnya';
import Equipment from '../components/home/Equipment';
import Faq from '../components/home/Faq';
import Degreesection from '../components/home/Degreesection';
import Dentalservices from '../components/home/Dentalservices';
import DrAkshay from '../components/home/DrAkshay';
import Contact from '../components/home/Contact';
import Blog from '../components/Blog';
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      <HomeHero />
      <Countdown />
      <Clinicinfo />
      <Dentalservices></Dentalservices>
      <DrAkshay></DrAkshay>
      <Drsudnya />
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        <Testimonial></Testimonial>
      </Suspense>
      <Equipment />
      <Faq />
      <Contact></Contact>


      {/* <Degreesection /> */}

    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

