// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    firstname: "Franck",
    lastname: "GALLIOD",
    email: "contact@franckwebpro.com",
    age: 27,
    short_description:
      "Ancien militaire reconverti comme développeur web et Webflow, entrepreneur dans la tech, voyageur...",
    long_description: "à venir",
    picture_url: "url",
    github_link: "https://github.com/FranckWebPro",
    linkedin_link: "https://www.linkedin.com/in/franck-galliod/",
    password: "scamlife",
  },
];

const stacks = [
  {
    name: "Next.js",
    logo: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    stack_link: "https://nextjs.org/",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    stack_link: "https://fr.react.dev/",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/langfr-120px-Node.js_logo.svg.png",
    stack_link: "https://nodejs.org/fr",
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    stack_link: "https://expressjs.com/fr/",
  },
  {
    name: "Javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
    stack_link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    name: "Tailwind",
    logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    stack_link: "https://tailwindcss.com/",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-130px-CSS3_logo_and_wordmark.svg.png",
    stack_link: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/langfr-130px-HTML5_logo_and_wordmark.svg.png",
    stack_link: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    name: "Webflow",
    logo: "https://dailybrand.co.zw/wp-content/uploads/2023/10/webflow-2.png",
    stack_link: "https://webflow.com/",
  },
];

const projects = [
  {
    title: "Wildcards",
    description: "Mon premier projet de formation à la Wild Code School, développé en HTML, CSS et JS natif",
    client_name: null,
    preview_picture_url: "url",
    link: "https://franckwebpro.github.io/wildcards.github.io/",
    github_repo: "https://github.com/FranckWebPro/wildcards.github.io",
    published: true,
    status: "Terminé",
  },
  {
    title: "ToDo-List JS",
    description: "Entrainement lors de ma formation JS natif avec un to-do list classique",
    client_name: null,
    preview_picture_url: "url",
    link: "",
    github_repo: "https://github.com/FranckWebPro/ToDoList-JS",
    published: true,
    status: "Terminé",
  },
  {
    title: "Todo-List React",
    description:
      "Entrainement lors de ma formation à React avec un to-do list, reprise du style de la première to-do list",
    client_name: null,
    preview_picture_url: "url",
    link: "",
    github_repo: "https://github.com/FranckWebPro/ToDoList-React",
    published: true,
    status: "Terminé",
  },
  {
    title: "Cocktail Club",
    description:
      "Second projet de formation à la Wild Code School, développé avec React, HTML, CSS et appel d'API externe",
    client_name: null,
    preview_picture_url: "url",
    link: "https://js-bdx-0224-p2-cocktail-club-client-7ljk.vercel.app/",
    github_repo: "https://github.com/WildCodeSchool-2024-02/JS-bdx-0224-P2-cocktail_club",
    published: true,
    status: "Terminé",
  },
  {
    title: "Senior Sanctuary",
    description:
      "Projet 'Hackaton' interne à la Wild Code School de deux jours, une application de dévouverte des pays adaptée pour la retraite, réalisé avec des élèves Data Analyst",
    client_name: null,
    preview_picture_url: "url",
    link: "https://senior-sanctuary.webflow.io/",
    github_repo: "https://github.com/FranckWebPro/senior-sanctuary",
    published: true,
    status: "Terminé",
  },
  {
    title: "Le guide du Roulard",
    description:
      "Deuxième hackaton de la Wild Code School, avec pour sujet l'inclusivité sur le web, nous avons réalisé ce guide de voyage avec une note d'acessibilité, réalisé avec une designer et des data analyst ",
    client_name: null,
    preview_picture_url: "url",
    link: "",
    github_repo: "https://github.com/Phil-BENISSAN/0224-hackathon-team1",
    published: true,
    status: "Terminé",
  },
  {
    title: "Ce Portfolio",
    description: "Mon portfolio professionnel, développé avec Next et Typescript afin de me former dessus",
    client_name: null,
    preview_picture_url: "url",
    link: "https://portfolio-rho-flax-60.vercel.app/",
    github_repo: "https://github.com/FranckWebPro/Portfolio",
    published: true,
    status: "En amélioration constante",
  },
  {
    title: "Agence No Code",
    description:
      "Site d'Agence Webflow que j'ai développé afin de trouver des clients en tant que freelance pour du no code et SEO, avec Webflow principalement",
    client_name: null,
    preview_picture_url: "url",
    link: "https://www.agencenocode.com/",
    github_repo: "",
    published: true,
    status: "En cours de développement",
  },
  {
    title: "LinkerFlow",
    description: "Mon portfolio professionnel, développé avec Next et Typescript afin de me former dessus",
    client_name: null,
    preview_picture_url: "url",
    link: "",
    github_repo: "",
    published: false,
    status: "En cours de développement",
  },
];

const projectsStacks = [
  {
    stack_id: 1,
    project_id: 1,
  },
  {
    stack_id: 2,
    project_id: 2,
  },
  {
    stack_id: 1,
    project_id: 2,
  },
  {
    stack_id: 2,
    project_id: 1,
  },
  {
    stack_id: 3,
    project_id: 3,
  },
  {
    stack_id: 3,
    project_id: 5,
  },
  {
    stack_id: 4,
    project_id: 4,
  },
  {
    stack_id: 5,
    project_id: 5,
  },
];

export { users, projects, stacks, projectsStacks };
