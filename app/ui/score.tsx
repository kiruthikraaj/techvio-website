import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({ subsets: ["latin"] });

export default function Score() {
  return (
    <>
      <section className="about-company-section">
        <div className="container about-container d-grid">
          <div className="title-section">
            <h4 className="title m-b-10">ABOUT OUR COMPANY</h4>
            <h2 className="sub-title">
              Providing Your Business With A Quality IT Service is Our Passion
            </h2>
            <p className={clsx("summary m-t-20", catamaran.className)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim
            </p>

            <div className="skill-sets">
              <div className="skill-lists">
                <div className="d-flex align-center justify-between m-b-10">
                  <p>IT Consulting</p>
                  <p>90%</p>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress"
                    data-value="90%"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-lists m-t-20">
                <div className="d-flex align-center justify-between m-b-10">
                  <p>Cloud Solutions</p>
                  <p>75%</p>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress"
                    data-value="75%"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-lists m-t-20">
                <div className="d-flex align-center justify-between m-b-10">
                  <p>Managed IT Service</p>
                  <p>85%</p>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress"
                    data-value="85%"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="about-banner-image position-relative">
            <img src="/about.jpeg" alt="about banner" />
            <div className="years-exp">
              <h6>23</h6>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-members-section">
        <div className="container">
          <div className="title-section text-center">
            <h4 className="title m-b-10">TEAM MEMBER</h4>
            <h2 className="sub-title">Expert Team</h2>
          </div>
          <div className="members-container d-grid">
            <div className="members-details">
              <div className="members-image overflow-hidden position-relative">
                <img src="/team-1.jpeg" alt="Ava Farrington" />

                <div className="social-links">
                  <Link href="/">
                    <Image
                      src="/facebook.png"
                      alt="facebook"
                      height={22}
                      width={22}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/twitter.png"
                      alt="facebook"
                      height={22}
                      width={22}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/linkedin.png"
                      alt="facebook"
                      height={22}
                      width={22}
                    />
                  </Link>
                </div>
              </div>
              <div className="member-info text-center">
                <p className="member-name">Ava Farrington</p>
                <p className="member-designation">Founder, CEO</p>
              </div>
            </div>

            <div className="members-details">
              <div className="members-image overflow-hidden position-relative">
                <img src="/team-2.jpeg" alt="Ava Farrington" />

                <div className="social-links">
                  <Link href="/">
                    <Image src="/facebook.png" alt="facebook" height={22} width={22}/>
                  </Link>
                  <Link href="/">
                    <Image src="/twitter.png" alt="facebook" height={22} width={22} />
                  </Link>
                  <Link href="/">
                    <Image src="/linkedin.png" alt="facebook" height={22} width={22}/>
                  </Link>
                </div>
              </div>
              <div className="member-info text-center">
                <p className="member-name">Kevin Haley</p>
                <p className="member-designation">Co-Founder, CTO</p>
              </div>
            </div>

            <div className="members-details">
              <div className="members-image overflow-hidden position-relative">
                <img src="/team-3.jpeg" alt="Ava Farrington" />

                <div className="social-links">
                  <Link href="/">
                    <Image src="/facebook.png" alt="facebook" height={22} width={22}/>
                  </Link>
                  <Link href="/">
                    <Image src="/twitter.png" alt="facebook" height={22} width={22}/>
                  </Link>
                  <Link href="/">
                    <Image src="/linkedin.png" alt="facebook" height={22} width={22}/>
                  </Link>
                </div>
              </div>
              <div className="member-info text-center">
                <p className="member-name">Alishia Fulton</p>
                <p className="member-designation">Chief Creative Officer</p>
              </div>
            </div>

            <div className="members-details">
              <div className="members-image overflow-hidden position-relative">
                <img src="/team-4.jpeg" alt="Ava Farrington" />

                <div className="social-links">
                  <Link href="/">
                    <Image src="/facebook.png" alt="facebook" height={22} width={22}/>
                  </Link>
                  <Link href="/">
                    <Image src="/twitter.png" alt="facebook" height={22} width={22}/>
                  </Link>
                  <Link href="/">
                    <Image src="/linkedin.png" alt="facebook" height={22} width={22}/>
                  </Link>
                </div>
              </div>
              <div className="member-info text-center">
                <p className="member-name">Lucas Martinez</p>
                <p className="member-designation">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
