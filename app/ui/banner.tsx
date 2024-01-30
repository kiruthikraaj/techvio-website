import Link from "next/link";
import Image from "next/image";

import { Catamaran } from "next/font/google";
import clsx from "clsx";
const catamaran = Catamaran({ subsets: ["latin"] });

export default function Banner() {
  return (
    <div className="banner-section">
      <div className="container h-100 d-flex align-center">
        <div className="flex-1">
          <div className="social-icons">
            <Link href="#">
              <Image
                src="/facebook.png"
                alt="facebook"
                height={18}
                width={18}
              />
            </Link>
            <Link href="#">
              <Image
                src="/instagram.png"
                alt="instagram"
                height={18}
                width={18}
              />
            </Link>
            <Link href="#">
              <Image src="/twitter.png" alt="twitter" height={18} width={18} />
            </Link>
            <Link href="#">
              <Image
                src="/facebook.png"
                alt="facebook"
                height={18}
                width={18}
              />
            </Link>
          </div>
          <h1>IT Solutions & Business Services Company</h1>
          <p className={catamaran.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor magna aliqua, magna aliqua. ipsum is simply dummy
            text of the printing.
          </p>
          <div className="banner-buttons">
            <Link href="#" className={clsx("btn btn-white", catamaran.className)}>
              Our Service
            </Link>
            <Link href="#" className={clsx("btn btn-dark", catamaran.className)}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex-1 d-flex align-center justify-center">
          <img src="/home-banner-image.png" alt="banner image" />
        </div>
      </div>
      <div className="curve-shape">
        <img src="/home-bottom-shape.png" alt="bg curve" />
      </div>
    </div>
  );
}
