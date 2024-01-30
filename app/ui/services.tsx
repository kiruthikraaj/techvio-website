import Image from "next/image";
import Link from "next/link";

import { Catamaran } from "next/font/google";
import clsx from "clsx";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function Service() {
  return (
    <div className="our-service container">
      <h5>WHAT WE PROVIDE</h5>
      <h2>Our Services</h2>
      <div className="service-container d-flex">
        <div className="service-card">
          <Image
            src="/development.png"
            alt="development"
            height={50}
            width={50}
          />
          <h4>Web Development</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
        <div className="service-card">
          <Image
            src="/digital-marketing.png"
            alt="digital-marketing"
            height={50}
            width={50}
          />
          <h4>Digital Marketing</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
        <div className="service-card">
          <Image src="/startup.png" height={50} width={50} alt="startup" />
          <h4>Startup Solutions</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
        <div className="service-card">
          <Image
            src="/super-intelligence.png"
            alt="super-intelligence"
            height={50}
            width={50}
          />
          <h4>Networking Services</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
        <div className="service-card">
          <Image src="/coding.png" alt="coding" height={50} width={50} />
          <h4>SEO Optimization</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
        <div className="service-card">
          <Image
            src="/mobile-app.png"
            alt="mobile-app"
            height={50}
            width={50}
          />
          <h4>Apps Development</h4>
          <p className={clsx(catamaran.className)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <Link href="#">
            <Image
              className="arrow-img"
              src="/right-arrows.png"
              alt="arrow"
              height={50}
              width={50}
            />
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
