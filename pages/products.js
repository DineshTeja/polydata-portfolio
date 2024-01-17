import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import ProjCard from "../components/ProjCard";
import AdvWorkCard from "../components/AdvWorkCard";

// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const workRef = useRef();
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

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
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div className="gradient-circle"></div>
            <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
              <h1 className="text-3xl font-bold">Products</h1>

              <div className="mt-5 laptop:mt-10 grid grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 mob:grid-cols-2 gap-4">
                {data.projects.map((project) => (
                  <AdvWorkCard
                    key={project.id}
                    img={project.imageSrc}
                    name={project.title}
                    dates={project.dates}
                    description={project.description}
                    secondpara={project.secondpara}
                    onClick={() => window.open(project.url)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
