import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { fab } from "@fortawesome/free-brands-svg-icons"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import styles from '../styles/Home.module.css'
import {ThemeProvider} from 'next-themes'
import Landing from '../sections/Landing'
import Aboutme from '../sections/Aboutme';
import Navbar from '../components/Navbar';
import { useRef } from 'react';
import PhoneNav from '../components/PhoneNav';
library.add(fas,fab)

// library.add(fab)


export default function Home() {
  const home = useRef(null)
  const another = useRef(null);
  const scrollDown = (ref:any) => {
    window.scrollTo({
      top: ref.current.offsetTop-90,
      behavior: 'smooth',
    });
  };
  return (
    <ThemeProvider attribute='class'>
      <Head>
      <title>|| Khan Afif Farhan-Web developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='md:mx-[118px] sm:mx-[50px] mx-[12px] mt-[12px] border-cyan-300 shadow-[0px_0px_4px_0px_#e1e1e1] dark:bg-red-600 '
      >
        <Navbar fun={scrollDown} another={another} home={home} />
        <Landing reff={home} />
        <Aboutme reff={another} />
        <div className="fixed bottom-0 px-[12px] left-0 right-0 w-full footer md:hidden">
          <PhoneNav fun={scrollDown} another={another} home={home} />
        </div>
        

        

        

        

          
      </main>
      </ThemeProvider>
  )
}
