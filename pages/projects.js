// Import prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function Projects({ allProjects }) {
  return (
    <div id="projects-tab" className="mb-3" style={{ marginTop: "3rem" }}>
      <ul className="project__list">
        {allProjects.map((project) => {
          return (
            <li key={project.title} className="project">
              <div className="project__wrapper">
                <img
                  src={"https://ik.imagekit.io/maysentg" + project.imageUrl}
                  className="project__img"
                  alt={project.title}
                />
                <div className="project__description">
                  <h3 className="project__description--title">
                    {project.title}
                  </h3>
                  <h4 className="project__description--sub-title">
                    {project.skills}
                  </h4>
                  <p className="project__description--para">
                    {project.description}
                  </p>
                  <div className="project__description--links">
                    <a
                      href={project.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="project__description--link"
                    >
                      <img
                        alt="github icon"
                        src="https://ik.imagekit.io/maysentg/tr:w-100,h-100/github-logo-white.png"
                        className="icon"
                        style={{ height: "2rem" }}
                      />
                    </a>

                    <a
                      href={project.projectUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="project__description--link"
                    >
                      <img
                        alt="web preview icon"
                        src="https://ik.imagekit.io/maysentg/tr:w-100,h-100/website-logo-white.png"
                        className="icon"
                        style={{ height: "2rem" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const allProjects = await prisma.project.findMany();
  console.log(allProjects);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allProjects,
    },
  };
}

export default Projects;
