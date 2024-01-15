import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// Data
import { showResume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [router]);

  const padding = 20 * 2; // 20px padding on each side

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
            {/* <div> 
              <Document file={'/DineshV_Resume.pdf'}>
                <Page pageNumber={1} width={window.innerWidth / 2} renderTextLayer={false}/>
              </Document>
            </div> */}
              {/* <Document file={'/DineshV_Resume.pdf'}>
                <Page pageNumber={1} width={window.innerWidth/2} renderTextLayer={false}/>
              </Document> */}
            <div
              // className={`w-full ${
              //   mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              // } max-w-4xl p-20 mob:p-5 desktop:p-15 rounded-lg shadow-sm`}
            >

              <Document file={'/DineshV_Resume.pdf'}>
                <Page pageNumber={1} scale = {2} renderTextLayer={false}/>
              </Document>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;