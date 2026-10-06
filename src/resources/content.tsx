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

const linkedinUrl = "https://www.linkedin.com/in/youssouf-ait-amir/";

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
    name: "LinkedIn",
    icon: "linkedin",
    link: linkedinUrl,
    essential: true,
  },
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
  aboutMe: `Étudiant en informatique — Lille, France\nBrevet de Technicien Supérieur Cybersécurité informatique & Électronique\nStage informatique — Konica Minolta Lille\nRigueur, autonomie, curiosité\nPassionné de cybersécurité & réseaux\nIntérêt pour le développement web\nÀ l'aise en équipe comme en autonomie\nToujours partant pour de nouveaux défis, et ouvert à de nouvelles opportunités !`,
  linkedin: linkedinUrl,
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
  profile: {
    title: "Profil",
    text: (
      <>
        Rigoureux, autonome et dynamique, je mets à profit mes compétences en réseaux et en
        gestion informatique pour assurer le bon fonctionnement, le suivi et la maintenance des
        équipements d'un parc informatique.
      </>
    ),
    facts: [
      { icon: "mapPin", label: "Lille (59)" },
      { icon: "academic", label: "BTS Cybersécurité informatique et Électronique" },
      { icon: "language", label: "Anglais B1 · Allemand A2+" },
    ],
    cv: { label: "Télécharger mon CV", href: "/files/CV-Youssouf-Ait-Amir.pdf" },
  },
  studies: {
    display: true,
    title: "Formation",
    items: [
      {
        title: "BTS Cybersécurité informatique et Électronique",
        subtitle: "Option B : Électronique et Réseaux",
        place: "LGT Baggio",
        location: "Lille (59)",
        period: "2024 – 2026",
        bullets: [
          "Formation exigeant rigueur, méthode et respect des procédures.",
          "Développement de l'autonomie, du travail en équipe et de la capacité d'analyse.",
        ],
        tools: [
          { label: "Systèmes & réseaux", tags: ["Zabbix", "Wireshark"] },
          {
            label: "Installation de réseaux",
            tags: ["VLAN", "LAN", "DNS", "DHCP", "Cisco Packet Tracer", "PuTTY"],
          },
          {
            label: "Programmation",
            tags: ["Python", "C", "SQL / MySQL", "CLI", "JS / TS / PHP", "VS Code"],
          },
          { label: "Électronique & systèmes embarqués", tags: ["Node-RED", "Arduino IDE"] },
          { label: "Bureautique & ticketing", tags: ["Microsoft Office", "Hubspot CRM"] },
          { label: "DevOps / CI-CD", tags: ["Git", "GitHub", "Vercel"] },
        ],
      },
      {
        title: "BUT Sciences des Données",
        subtitle: "Réorientation",
        place: "Université de Lille",
        location: "Lille (59)",
        period: "2023 – 2024",
        bullets: [
          "Statistiques et probabilités : application des lois de probabilités à l'analyse de données.",
          "Informatique décisionnelle : SGBD et reporting (Microsoft SQL Server / Power BI).",
        ],
      },
      {
        title: "Baccalauréat Général",
        subtitle: "Spécialités Mathématiques & NSI",
        place: "Lycée Faidherbe",
        location: "Lille (59)",
        period: "2022 – 2023",
        summary: <>Admis.</>,
      },
    ],
  },
  work: {
    display: true,
    title: "Expérience professionnelle",
    items: [
      {
        title: "Stage PFMP — Administration réseau & cybersécurité",
        subtitle: "6 semaines",
        place: "Konica Minolta Business Solutions France",
        location: "Sainghin-en-Mélantois (59)",
        period: "19/05 – 28/06/2025",
        bullets: [
          "Écoute et adaptation aux besoins spécifiques du client pour proposer des solutions adaptées à son environnement.",
          "Automatisation Python de la sauvegarde des configurations réseau (Cisco, HPE Aruba), avec chiffrement des accès.",
          "Renforcement de la sécurité du protocole de supervision réseau (SNMP) sur le site du client, avec compte-rendu.",
          "Mise en place d'équipements réseau redondants et découverte du rôle des pare-feux en entreprise.",
          "Découverte de l'électronique appliqué à l'informatique : serveur lame HPE Synergy, onduleur Eaton (RS232 / USB) et analyse de trames avec Wireshark.",
        ],
        tools: [{ label: "Technologies", tags: ["Python", "Cisco", "HPE Aruba", "SNMP", "Wireshark"] }],
        link: { label: "Voir le détail du stage", href: "/work/stage-konica-minolta" },
      },
    ],
  },
  skills: {
    display: true,
    title: "Compétences techniques",
    groups: [
      {
        title: "Réseaux & systèmes",
        icon: "server",
        description: "Installation, supervision et maintenance des équipements d'un parc informatique.",
        tags: [
          { name: "VLAN" },
          { name: "LAN" },
          { name: "DNS" },
          { name: "DHCP" },
          { name: "SNMP" },
          { name: "Cisco Packet Tracer", icon: "cisco" },
          { name: "PuTTY", icon: "terminal" },
          { name: "Zabbix" },
          { name: "Wireshark", icon: "wireshark" },
        ],
      },
      {
        title: "Programmation & données",
        icon: "code",
        description: "Scripts d'automatisation, développement web, bases de données et reporting.",
        tags: [
          { name: "Python", icon: "python" },
          { name: "C", icon: "c" },
          { name: "SQL / MySQL", icon: "mysql" },
          { name: "JS / TS / PHP", icon: "typescript" },
          { name: "CLI", icon: "bash" },
          { name: "VS Code" },
          { name: "Microsoft SQL Server" },
          { name: "Power BI" },
        ],
      },
      {
        title: "Électronique & systèmes embarqués",
        icon: "chip",
        description: "Circuits, composants et systèmes embarqués.",
        tags: [{ name: "Node-RED", icon: "nodered" }, { name: "Arduino IDE", icon: "arduino" }],
      },
      {
        title: "DevOps & déploiement",
        icon: "rocket",
        description: "Versionnement du code et déploiement continu (CI/CD).",
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
      {
        title: "Bureautique & ticketing",
        icon: "document",
        tags: [{ name: "Microsoft Office" }, { name: "Hubspot CRM", icon: "hubspot" }],
      },
    ],
  },
  strengths: {
    display: true,
    title: "Atouts",
    items: [
      {
        icon: "shield",
        title: "Rigueur & organisation",
        description: "Fiabilité dans l'exécution des tâches confiées.",
      },
      {
        icon: "bolt",
        title: "Réactivité",
        description: "Capacité à gérer plusieurs tâches et à travailler sous rythme soutenu.",
      },
      {
        icon: "clock",
        title: "Ponctualité & fiabilité",
        description: "Assiduité et respect des horaires.",
      },
      {
        icon: "layers",
        title: "Polyvalence",
        description: "Adaptation rapide à de nouvelles consignes et environnements.",
      },
    ],
  },
  languages: {
    display: true,
    title: "Langues",
    items: [
      { name: "Anglais", level: "B1" },
      { name: "Allemand", level: "A2+" },
    ],
  },
  interests: {
    display: true,
    title: "Centres d'intérêt",
    items: [
      {
        icon: "trophy",
        title: "Tennis en compétition",
        description: "10 ans de pratique, esprit de compétition et dépassement de soi.",
      },
      { icon: "heart", title: "Passionné de cuisine" },
      { icon: "sparkles", title: "Veille informatique" },
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
