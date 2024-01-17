import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-20 p-2 laptop:p-0">
        <div>
          <h1 className="text-3xl font-bold">Contact.</h1>
          <div className="mt-5">
            {/* <h1 className="text-3xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl text-bold">
              Let&apos;s Work Together!
            </h1> */}
            {/* <Button type="primary">Schedule a Call</Button> */}
            <div className="mt-3">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made by{" "}
        <Link href="https://www.linkedin.com/in/dinesh-vasireddy">
          <a className="underline underline-offset-1">Dinesh Vasireddy</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
