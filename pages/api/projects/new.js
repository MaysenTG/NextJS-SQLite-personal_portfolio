import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const project = await prisma.project
    .create({
      data: {
        title: req.body.inputTitle,
        skills: req.body.inputSkills,
        description: req.body.inputDescription,
        githubUrl: req.body.inputGithubURL,
        projectUrl: req.body.inputPreviewURL,
        imageUrl: "",
      },
    })
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
