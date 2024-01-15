import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import InvolvCard from "../components/InvolvCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from 'next/image'

// Local Data
import data from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();


  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current, textFive.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="flex flex-col laptop:flex-row items-center justify-between mt-10">
          <div className="flex-initial mr-4 laptop:mr-8">
            <div className="laptop:mt-20 mt-10">
              <div className="mt-5">
                <h1
                  ref={textOne}
                  className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-full"
                >
                  {data.headerTaglineOne}
                </h1>
                <h1
                  ref={textTwo}
                  className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                >
                  {data.headerTaglineTwo}
                </h1>
                <h2
                  ref={textThree}
                  className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                >
                  {data.headerTaglineThree}
                </h2>
                <h1
                  ref={textFour}
                  className="text-xl tablet:text-3xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                >
                  <div className="opacity-90 text-slate-100">
                    {data.headerTaglineFour}
                  </div>
                </h1>
                <h2
                  ref={textFive}
                  className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-3xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                >
                  <div className="opacity-50">
                    {data.headerTaglineFive}
                  </div>
                </h2>
              </div>

              <Socials className="mt-2 laptop:mt-5" />
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center">
          <Image
            src="/images/dinesh_headshot copy.png" // Replace with the path to your image
            alt="Dinesh Vasireddy"
            width={500} // specify the width
            height={500} // and the height
            className="object-cover rounded-full"
          />
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl font-bold">Current Involvements.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-4 tablet:grid-cols-1 gap-4">
            {data.involvements.map((involvement) => (
              <InvolvCard
                key={involvement.id}
                img={involvement.imageSrc}
                name={involvement.title}
                dates={involvement.dates}
                description={involvement.description}
                onClick={() => window.open(involvement.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl font-bold">Practical Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-4 tablet:grid-cols-3 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                dates={project.dates}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-3xl font-bold">Publications.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-4 tablet:grid-cols-1 gap-4">
            {data.publications.map((publication) => (
              <WorkCard
                key={publication.id}
                img={publication.imageSrc}
                name={publication.title}
                description={publication.description}
                onClick={() => window.open(publication.url)}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-3xl font-bold">About.</h1>
          <div className="opacity-70">
            <p className="mt-5 text-xl laptop:text-3xl w-full laptop:w-full">
              {data.aboutpara}
            </p>
          </div>
        </div>

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <h1 className="text-3xl font-bold">Skills.</h1>
          <div className="flex mob:flex-col desktop:flex-row justify-between">
            {resume.languages && (
              <div className="mt-2 mob:mt-5">
                <h2 className="text-xl">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {resume.languages.map((language, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 mb-1 bg-slate-700 text-white rounded hover:bg-blue-300 transition-colors duration-200"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              </div>
            )}


            {resume.frameworks && (
              <div className="mt-2 mob:mt-5">
                <h2 className="text-xl">Frameworks</h2>
                <div className="flex flex-wrap gap-2">
                  {resume.frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 mb-1 bg-slate-700 text-white rounded hover:bg-blue-300 transition-colors duration-200"
                    >
                      {framework}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.others && (
              <div className="mt-2 mob:mt-5">
                <h2 className="text-xl">Others</h2>
                <div className="flex flex-wrap gap-2">
                  {resume.others.map((other, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 mb-1 bg-slate-700 text-white rounded hover:bg-blue-300 transition-colors duration-200"
                    >
                      {other}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
