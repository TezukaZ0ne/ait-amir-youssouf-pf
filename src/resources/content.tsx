import { About, Blog, Contact, Gallery, Home, Newsletter, Parcours, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Youssouf",
  lastName: "Ait Amir",
  name: `Youssouf Ait Amir`,
  role: "Étudiant en Cybersécurité informatique et Électronique",
  avatar: "/images/avatar.jpg",
  email: "youssouf.tzvn@gmail.com",
  location: "Europe/Paris",
  locationLabel: "Lille, France",
  languages: ["Français", "Anglais", "Allemand"],
  locale: "fr",
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TezukaZ0ne",
    essential: true,
  },
  // TODO: ajouter le lien LinkedIn une fois fourni
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role.toLowerCase()}`,
  headline: <>Bienvenue sur mon portfolio</>,
  featured: {
    display: false,
    title: <></>,
    href: "/work",
  },
  subline: (
    <>
      Je m'appelle {person.firstName}, {person.role.toLowerCase()}.
    </>
  ),
};

const professionalCard = {
  name: person.name,
  position: "Étudiant en informatique",
  aboutMe: `Salut ! Je m'appelle Youssouf, étudiant en informatique à Lille, France.\n\nAprès une réorientation depuis un BUT Sciences des Données, je poursuis un BTS Cybersécurité informatique et Électronique, où j'ai développé rigueur et autonomie — renforcées par un stage chez Konica Minolta en support technique et relation client.\n\nToujours partant pour de nouvelles opportunités qui me feront progresser !`,
  linkedin: "https://www.linkedin.com/in/youssouf-ait-amir-96b1132aa",
  github: "https://github.com/TezukaZ0ne",
  cvLink: "/files/CV-Youssouf-Ait-Amir.pdf",
  profileImage: "/images/profile2.webp",
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `${person.name}, ${person.role.toLowerCase()}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  // Section volontairement vide pour le moment : la "professional card"
  // sera intégrée ici une fois les consignes reçues.
  intro: {
    display: false,
    title: "",
    description: <></>,
  },
  work: {
    display: false, // le contenu Expérience se trouve maintenant sur la page Parcours/Compétences
    title: "",
    experiences: [],
  },
  studies: {
    display: false, // le contenu Formation se trouve maintenant sur la page Parcours/Compétences
    title: "",
    institutions: [],
  },
  technical: {
    display: false, // le contenu Compétences se trouve maintenant sur la page Parcours/Compétences
    title: "",
    skills: [],
  },
};

const parcours: Parcours = {
  path: "/parcours",
  label: "Parcours & Compétences",
  title: `Parcours & Compétences – ${person.name}`,
  description: `Formation, expérience professionnelle et compétences de ${person.name}`,
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "BTS Cybersécurité informatique et Electronique — Option B : Électronique et Réseaux",
        description: (
          <>
            LGT Baggio, Lille (59) · 2024 – 2026
            <br />
            Formation exigeant rigueur, méthode et respect des procédures. Développement de
            l'autonomie, du travail en équipe et de la capacité d'analyse.
          </>
        ),
      },
      {
        name: "BUT Sciences des Données — Réorientation",
        description: (
          <>
            Université de Lille (59) · 2023 – 2024
            <br />
            Statistiques et probabilités : application des lois de probabilités à l'analyse de
            données. Bureautique : Microsoft Office (Word, Excel, PowerPoint, Access). Capacité
            d'adaptation et d'organisation face à des exigences académiques variées.
          </>
        ),
      },
      {
        name: "Baccalauréat Général — Spécialités Mathématiques & NSI",
        description: <>Lycée Faidherbe, Lille (59) · 2022 – 2023 · Admis</>,
      },
    ],
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    experiences: [
      {
        company: "Konica Minolta Business Solutions France",
        timeframe: "19/05 – 28/06/2025 · 6 semaines",
        role: "Stage PFMP — Support technique & relation client (Saighin-en-Mélantois, 59)",
        achievements: [
          <>
            Rigueur et sang-froid sur des interventions à enjeux réels, sans marge d'erreur
            tolérée.
          </>,
          <>
            Prise en main rapide de missions concrètes sur des outils et équipements inconnus.
          </>,
          <>
            Sens du service, ponctualité et esprit d'équipe reconnus par l'entreprise d'accueil.
          </>,
        ],
        images: [],
      },
    ],
  },
  skills: {
    display: true,
    title: "Compétences",
    skills: [
      {
        title: "Sens du contact",
        description: <>Accueil, écoute et amabilité envers la clientèle.</>,
        tags: [],
        images: [],
      },
      {
        title: "Rigueur & organisation",
        description: <>Fiabilité dans l'exécution des tâches confiées.</>,
        tags: [],
        images: [],
      },
      {
        title: "Esprit d'équipe",
        description: <>Habitué au travail collectif et à l'entraide.</>,
        tags: [],
        images: [],
      },
      {
        title: "Réactivité",
        description: <>Capacité à gérer plusieurs tâches et à travailler sous rythme soutenu.</>,
        tags: [],
        images: [],
      },
      {
        title: "Ponctualité & fiabilité",
        description: <>Assiduité et respect des horaires.</>,
        tags: [],
        images: [],
      },
      {
        title: "Polyvalence",
        description: <>Adaptation rapide à de nouvelles consignes et environnements.</>,
        tags: [],
        images: [],
      },
      {
        title: "Langues",
        description: <>Anglais : B1 certifié · Allemand : A2+ certifié.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Coordonnées de ${person.name}`,
  phone: "07 80 75 07 19",
  location: "Lille, France",
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets réalisés dans le cadre du parcours informatique de ${person.name}`,
  // Créer une nouvelle page projet en ajoutant un fichier .mdx dans app/work/projects
  // Tous les projets sont listés sur / et /work
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, professionalCard, parcours, contact, blog, work, gallery };
