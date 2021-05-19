export const projectData = [
  {
    title: "wavetape",
    technologies: ["ruby on rails", "react", "redux", "aws", "postgresql"],
    description: "a Soundcloud clone.",
    ghlink: "#",
    livelink: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "openFridge",
    technologies: ["mongodb", "express", "react", "node"],
    description: "Recipe generator",
    ghlink: "https://github.com/gorterd/open-fridge",
    livelink: "https://open--fridge.herokuapp.com/",
    imgSrc:
      "https://i.pinimg.com/originals/78/12/da/7812da761cbf109ca333fe3f516a0d5b.jpg",
  },
  {
    title: "Trivial Trivia",
    technologies: ["react"],
    description: "trivia game",
    ghlink: "https://github.com/tt954/trivia",
    livelink: "https://tt954.github.io/trivia/",
    imgSrc:
      "https://images.unsplash.com/photo-1580243074882-ff65266dda37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1654&q=80",
  },
  {
    title: "Match!",
    technologies: ["javascript"],
    description: "card matching game",
    ghlink: "https://github.com/tt954/match",
    livelink: "https://tt954.github.io/match/",
    imgSrc: "https://data.whicdn.com/images/279496569/original.gif",
  },
  {
    title: "Javascript 30",
    technologies: ["javascript"],
    description: "small javascript exercises with Wes Bos",
    ghlink: "https://tt954.github.io/js30/",
    livelink: "https://tt954.github.io/js30/",
    imgSrc:
      "https://cdn.vox-cdn.com/thumbor/bN7uyP23MBpTUpWcs6IZADqaF58=/0x0:600x450/1200x800/filters:focal(0x0:600x450)/cdn.vox-cdn.com/uploads/chorus_image/image/50102539/60388396.0.0.jpeg",
  },
]

let allTechs = []
projectData.forEach(project => {
  allTechs = [...allTechs, ...project.technologies]
})
export const techs = [...new Set(allTechs)]

export const emailjsKEYS = {
  templateId: "template_dnzji4c",
  serviceId: "service_66s30cf",
  userId: "user_7Be7mWxG97iGYB9Dqa8aM",
}