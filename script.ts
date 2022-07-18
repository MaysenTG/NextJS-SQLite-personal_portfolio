import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // const work = await prisma.education.create({
  //   data: {
  //     institute: "St Peters Cambridge",
  //     tenure: "01/2016 - 11/2018",
  //     location: "Cambridge",
  //     description: "High School education. I studied the IB Diploma program here where I focused on higher subjects of Chemistry, Physics and Economics. I also studied English and Maths and Theory of Knowledge (TOK)."
  //   },
  // })
  //console.dir(work);
  
    const settings = await prisma.settings.update({
    where: {
      id: 1,
    },
    data: {
      subtext: "Hi! I'm Maysen and I am interested in front end development. I have a passion for minimal and easy to use interfaces",
      button_label: "View projects",
      skill_1_label: "Web Design",
      skill_2_label: "Interface Design",
      skill_3_label: "Database Integration",
      skill_1_description: "I focus on creating mobile responsive websites using ReactJS. I utilize CSS frameworks (such as Bootstrap, MaterialUI, Tailwind) but am not afraid to use my own custom CSS if I believe I will get a better result. This is important especially for custom mobile responsive CSS queries.",
      skill_2_description: "Making appealing websites is crucial in the modern internet. It's important to showcase all aspects of the website in one place and grab the attention of the user. I make use of appealing websites using clear layouts, and minimal/clean colours.",
      skill_3_description: "I have extensive knowledge of working with databases - more specifically, Firestore and Postgres. Using a database makes sense for large scale projects, and as I pride myself on a responsive/fast website, a database only makes sense.",
    }
  });
  
  // Prisma command to update a project
  // const project = await prisma.project.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     imageUrl: '/live-code-editor-comp_RkgKwb1Vx.png',
  //   }});
}


main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })