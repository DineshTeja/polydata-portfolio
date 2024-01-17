import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import InvolvCard from "../components/InvolvCard";
import TestimonialCard from "../components/TestimonialCard";
import PartnerCard from "../components/PartnerCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const About = () => {
  const workRef = useRef();
  const router = useRouter();
  const One = useRef();
  const Two = useRef();
  const Three = useRef();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [One.current, Two.current, Three.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto laptop:mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="laptop:mt-10 w-full flex laptop:grid-cols-3 mob:grid-cols-1 items-center">
            <div className="gradient-circle"></div>
            <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
              <div className="mb-10 flex flex-col laptop:flex-row items-center justify-between mt-10 mob:mt-2 mob:ml-3 mob:items-center">
                <div className="flex-initial mr-4 laptop:mr-8">
                  <div>
                    <div className="laptop:mt-5">
                      <h1
                        ref={One} className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-full"
                      >
                        Learn More
                      </h1>
                      <h1
                        ref={Two} className="text-3xl tablet:text-3xl laptop:text-4xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                      >
                        About PolyData
                      </h1>
                      <h1
                        ref={Three}
                        className="text-xl tablet:text-xl laptop:text-2xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
                      >
                        <div className="opacity-90">
                          Reliable. Non-Partisan. Data-Driven Tools. Since 2021.
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex justify-end items-center mob:w-3/5 mob:mt-5">
                  <Image
                    src="/images/polydatasmaller_web.png"
                    alt="Dinesh Vasireddy"
                    width={300}
                    height={300}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-col laptop:flex-row justify-between mt-5">
                <div className="w-full laptop:w-1/3 laptop:ml-10 laptop:mr-10 mob:ml-2">
                  <h1 className="mt-5 text-3xl font-bold">Founder</h1>
                  <div className="flex-1 flex flex-col justify-center items-center mt-5">
                    <Image
                      src="/images/dinesh_headshot.png"
                      alt="Dinesh Vasireddy"
                      width={250}
                      height={250}
                      className="object-cover rounded-full"
                    />
                    <h2 className="mt-4 laptop:text-2xl mob:text-lg font-semibold">Dinesh Vasireddy</h2>
                    <h2 className="laptop:text-xl mob:text-sm font-semibold opacity-50">CEO, Lead Software Engineer</h2>
                    <Socials className="mt-1 laptop:mt-1" />
                  </div>
                </div>

                <div className="w-full laptop:w-1/3 laptop:ml-10 laptop:mr-10 mob:ml-2">
                  <h1 className="mt-5 text-3xl font-bold">Partners</h1>
                  <div className="mt-5 laptop:mt-5 grid grid-cols-1 laptop:grid-cols-2 tablet:grid-cols-2 mob:grid-cols-2 gap-4">
                    {data.partners.map((partner) => (
                      <PartnerCard
                        key={partner.id}
                        img={partner.imageSrc}
                        name={partner.title}
                        onClick={() => window.open(partner.url)}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full laptop:w-1/3 laptop:ml-10 laptop:mr-10 mob:ml-2">
                  <h1 className="mt-5 text-3xl font-bold">Our Goal</h1>
                  <div className="mt-5 laptop:mt-5">
                    <ul className="list-disc list-outside space-y-7 text-xl opacity-70 pl-5">
                      <li>Making information on the electoral process readily available to all voters in a convenient multi-platform application.</li>
                      <li>Using machine learning and modern predictive analytics to make election prediction more accessible and effective.</li>
                      <li>Engaging the general public with socially beneficial service opportunities related to voter accessibility, social justice, and political activism.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
