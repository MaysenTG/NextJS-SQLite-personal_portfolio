// Import prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function CV({ allWorks, allEducations }) {
  return (
    <main className="page cv-page">
      <section className="portfolio-block cv">
        <div className="container">
          <div className="work group">
            <br />
            <br />
            <br />
            <div className="heading">
              <h1 className="text-center section__title">Work experience</h1>
            </div>
            {allWorks
              .sort(function (a, b) {
                return b.id - a.id;
              })
              .map((job) => (
                <div key={job.id} className="item">
                  <div
                    className="row"
                    style={{ margin: "0 auto", width: 80 + "%" }}
                  >
                    <span className="title-tenure col-10">
                      <h4>{job.position}</h4>
                      <p className="text-muted location">{job.location}</p>
                      <p
                        id="title-location-pill"
                        style={{
                          fontSize: 0.85 + "rem",
                          fontWeight: "bold",
                          width: "max-content",
                          color: "white",
                          padding: "2px 6px",
                          backgroundColor: "#0ea0ff",
                        }}
                        className="rounded-pill"
                      >
                        <span>{job.company}</span>
                      </p>
                    </span>
                    <div className="col-md-2">
                      <p id="tenure" className="text-muted">
                        {job.tenure}
                      </p>
                    </div>
                    <p className="text-muted">{job.description}</p>
                    <hr />
                  </div>
                </div>
              ))}
          </div>

          <div className="education group">
            <div className="heading">
              <h2 className="text-center">Education</h2>
            </div>

            {allEducations
              .sort(function (a, b) {
                return b.id - a.id;
              })
              .map((edu) => (
                <div key={edu.id} className="item">
                  <div
                    className="row"
                    style={{ margin: "0 auto", width: 80 + "%" }}
                  >
                    <span className="title-tenure col-10">
                      <h4>Student</h4>
                      <p
                        style={{
                          fontSize: 0.85 + "rem",
                          fontWeight: "bold",
                          width: "max-content",
                          color: "white",
                          padding: "2px 6px",
                          backgroundColor: "#20c997",
                        }}
                        className="rounded-pill"
                      >
                        <span>{edu.institute}</span>
                      </p>
                    </span>
                    <div className="col-md-2">
                      <p id="tenure" className="text-muted">
                        {edu.tenure}
                      </p>
                    </div>
                    <p className="text-muted">{edu.description}</p>
                    <hr />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const allWorks = await prisma.work.findMany();
  const allEducations = await prisma.education.findMany();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allEducations,
      allWorks,
    },
  };
}

export default CV;
