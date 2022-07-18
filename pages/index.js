import Image from "next/image";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function Home({ settings }) {
  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img
              loading="lazy"
              style={{ marginTop: -2 + "rem", borderRadius: 100 + "%" }}
              alt="self portrait of Maysen Greenwood, owner/developer of this website"
              src="/self-portrait.jpeg"
              width="200"
            />
            <p className="lead mt-2">{settings.subtext}</p>
            <p>
              <Link href="/projects">
                <a
                  style={{ border: "#0f9fff", backgroundColor: "#0f9fff" }}
                  className="btn btn-primary my-2"
                >
                  {settings.button_label}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section
        className="portfolio-block skills"
        style={{ marginTop: -3 + "rem" }}
      >
        <div className="container">
          <div className="heading">
            <h2 className="text-center mb-5">Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div
                  className="card-header bg-transparent border-0"
                  style={{ textAlign: "center" }}
                >
                  <img src="/start-icon.png" width="75" alt="star icon" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">
                    {settings.skill_1_label}
                  </h4>
                  <p
                    className="card-text text-center text-muted"
                    style={{ fontSize: 0.85 + "rem" }}
                  >
                    {settings.skill_1_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div
                  className="card-header bg-transparent border-0"
                  style={{ textAlign: "center" }}
                >
                  <img src="/light-icon.png" width="75" alt="star icon" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">
                    {settings.skill_2_label}
                  </h4>
                  <p
                    className="card-text text-center text-muted"
                    style={{ fontSize: 0.85 + "rem" }}
                  >
                    {settings.skill_2_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div
                  className="card-header bg-transparent border-0"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src="/settings-icon.webp"
                    width="75"
                    alt="settings icon"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">
                    {settings.skill_3_label}
                  </h4>
                  <p
                    className="card-text text-center text-muted"
                    style={{ fontSize: 0.85 + "rem" }}
                  >
                    {settings.skill_3_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const settings = await prisma.settings.findFirst();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      settings,
    },
  };
}

export default Home;
