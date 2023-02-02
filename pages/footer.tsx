import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
const Footer = () => {
  return (
    <>
    <footer className="flex flex-row  justify-around bg-sky-900 text-white p-10">
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl font-bold ">Useful Links</p>
        <ul className="flex flex-col gap-y-2">
          <li>
            <Link href="" className="text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              About Us
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Client
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Download Brochures
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl font-bold ">Our Services</p>
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link href="" className="text-lg font-semibold">
              Web Design
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Web Development
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              Mobile App Development
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg font-semibold">
              E-Commerce Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl font-bold ">Contact Us</p>
        <p className="text-lg font-semibold">
          4th Floor, Virtual Coworks,
          <br /> Mangal City, Sch No: 54,
          <br /> Vijay Nagar Indore - 452010 (M.P.) India
        </p>
        <strong className="text-lg font-semibold">Phone: +91-999-340-8372</strong>
        <strong className="text-lg font-semibold">Email: info@codoxysolutions.com</strong>
      </div>
      <div className=" block flex flex-col gap-y-4 w-1/5">
        <p className="text-2xl font-bold ">About codoxy solution</p>
        <p className="text-lg font-semibold">
          Based in central part of India,we are a company of young <br />
          entrepreneurs working for the past 7 years.
        </p>
        <div className="flex gap-x-3 ">
          <FacebookIcon className="w-10 h-10 cursor-pointer" />
          <LinkedInIcon className="w-10 h-10 cursor-pointer" />
          <GoogleIcon className="w-10 h-9 cursor-pointers" />
        </div>
      </div>
    </footer>
    <div className="flex flex-col items-center justify-center bg-sky-900 text-white p-3">
      <p className="text-lg font-medium ">© Copyright <span className="font-bold">Codoxy Solution</span>.All Rights Reserved</p>
      <p className="text-lg font-medium">Designed by Codoxy Solutions </p>
    </div>
    </>
  );
};

export default Footer;
