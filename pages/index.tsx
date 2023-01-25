import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.jpg";
import code from "../public/code.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import working from "../public/working.jpg";

import 'animate.css';
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>VajeevanR Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className=" bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="" >
          <nav className="py-10 mb-12 flex justify-between dark:text-white rou">
            <h1 className="font-burtons text-xl">Vajeevan R</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
      </section>
          <div className=" multi-bg dark:bg-white rounded-tr-2xl rounded-tl-2xl  " >
            
            <div className="text-center p-10 py-10 ">
              <h2 className="text-5xl  py-2 animate__animated animate__fadeInDownBig text-black font-medium dark:text-black -400 md:text-6xl">
                Vajeevan Ramesh
              </h2>
            </div>
            
          </div>
        
        <section>
          <div className="body bg-white   py-10 rounded-br-2xl rounded-bl-2xl " >
              <div className="wrapper">
                <div className="static-txt mt-8 text-lg md:text-6xl md:mt-3 ">I'm a</div>
                <ul className="dynamic-txts text-lg md:text-6xl ">
                  <li><span> UI/UX Designer</span></li>
                  <li><span> Web Developer</span></li>
                  <li><span> Product Designer</span></li>
                  <li><span>UX Researcher</span></li>
               </ul>
              </div>
          </div>
        </section>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Certificate in Higher education in Computer science and Studied
                UX design from google career Certificate Program
              </p>
              
          
          <div>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/vajeevan-ramesh/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/vajee.vajeevan.14/">
                <AiFillFacebook />
              </a>
              <a href="https://www.instagram.com/vajeevann_/">
                <AiFillInstagram />
              </a>
              </div>
              <div className="zoom">
                <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                  <Image src={deved} layout="fill" objectFit="cover" alt={""} />
                </div>
              </div>
            </div>
          
        
        <br></br>
        <br></br>
        
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={code} alt={""}  />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Food Menu App
                </h3>
                <p className="py-2">
                  Restaurant’s Food menu and Caculating the total bill costs
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Canva</p>
   
                <p></p>
              </div>
              <div className="text-center    ">
                <Link href={'/project'} />
                  <button className="button font-bold "><span>Read Case Study</span></button>
              </div>
            </div>
            <div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Image src={working} alt={""}  />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Working on a project
                </h3>
                <p className="py-2">
                  Working on a project
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Adobe XD</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center">
                  <button className="button font-bold "><span>Read Case Study</span></button>
              </div>
            </div>
              
          </div>
          
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                src={web1} alt={""}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                src={web1} alt={""}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                src={web1} alt={""}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                src={web1} alt={""}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"

                layout="responsive"
                src={web1} alt={""}              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                src={web1} alt={""}              />
            </div>
          </div>
        </section>
        <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-burtons text-sm ">All Rights reserved @vajeevanR</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className=" font-burtons px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
          </nav>


      </main>
    </div>
  );
}