import { GitHubIcon, LinkedInIcon, XIcon, ResearchgateIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jesus Alan Hernandez",
  initials: "JAH",
  location: "Chihuahua, Chihuahua, Mexico",
  locationLink: "https://maps.app.goo.gl/ikgFPaZ2UnWm4UU66",
  about:
    "Biomedical Engineering graduate passionate about AI and BCI applications.",
  summary:
    "As a biomedical engineer, I have been involved in various projects directly related to healthcare and biomedical research, aiming to enhance the healthcare system. I predominantly work with Python, PyTorch, and TensorFlow, but I also utilize Node.js, C++, and database management. With over 4 years of experience, I have contributed to different research laboratories, both within my university and in various locations worldwide.",
  avatarUrl: "ProfileP.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "alanhernandezgalvan@icloud.com",
    tel: "(+52)625-124-1954",
    social: [
      {
        name:"Researchgate",
        url:"https://www.researchgate.net/profile/Jesus-Hernandez-100",
        icon:ResearchgateIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/unlikeghost",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jesusalanhernandezg/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/alanhernandezg",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Autónoma de Chihuahua",
      degree: "Bachelor's Degree in Biomedical Engineering",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Safran Engineering Services",
      link: "",
      badges: ["Mexico"],
      title: "Ai Developer",
      start: "2024",
      end: "present",
      description:
        "As part of the Innovation Team at Safran Americas, I develop solutions using technologies such as AI, VR, AR, and RPA. I lead projects, manage budgets, and hold meetings with clients to understand their needs and offer tailored proposals. I work on international projects within the corporate group."
    },
    {
      company: "Computational Physical Chemistry Lab",
      link: "",
      badges: ["Mexico"],
      title: "Research intern",
      start: "2018",
      end: "2024",
      description:
        "Research on artificial intelligence models, their development, and deployment within public institutions, along with software development applied to the healthcare sector."
    },
    {
      company: "Computer Vision Lab",
      link: "",
      badges: ["Mexico"],
      title: "Research intern",
      start: "2020",
      end: "2023",
      description:
        ""
    },
    {
      company: "Mirai Innovation Lab",
      link: "https://www.mirai-innovation-lab.com/",
      badges: ["Osaka"],
      title: "Research intern",
      start: "2020",
      end: "2020",
      description:
        "Executed the integration of artificial intelligence models tailored for the healthcare domain, engaging in comprehensive backend and frontend development. Additionally, contributed to research initiatives and ventured into the realm of robotics to enhance the technological landscape."
    },

  ],
  skills: [
    "Python",
    "Pytorch",
    "Tensorflow",
    "Django",
    "SQL",
    "C++",
    "Node.js",
    "React",
  ],
  publications:[
    {
      title: "A prototypical network for few-shot recognition of speech imagery data",
      description: "",
      link: {
        label: "10.1016/j.bspc.2023.105154",
        href: "10.1016/j.bspc.2023.105154",
      },
    },
    {
      title: "Imagined Speech Recognition in a Subject Independent Approach Using a Prototypical Network",
      description: "",
      link: {
        label: "10.1007/978-3-031-18256-3_4",
        href: "10.1007/978-3-031-18256-3_4",
      },
    },{
      title: "Outcome classification model for Covid-19 patients using artificial intelligence",
      description: "",
      link: {
        label: "10.21149/13547",
        href: "10.21149/13547",
      },
    },
    {
      title: "Validation and application of outcome prediction model in Covid-19 patients",
      description: "",
      link: {
        label: "10.21149/15117",
        href: "10.21149/15117",
      },
    }

  ],
  projects: [
    {
      title: "Galenos",
      techStack: [
        "Django",
        "SQL",
        "Next.js",
      ],
      description: "I am currently collaborating with a team on the development of a web platform dedicated to managing medical records in the healthcare sector.",
      link: {
        label: "www.galenos.tech",
        href: "https://www.galenos.tech/",
      },
    },
    {
      title: "Alaisa DNN",
      techStack: [
        "TensroFlow",
        "Flask",
        "React",
      ],
      description: "A web and desktop platform for the classification of Covid-19 results for patients in Chihuahua, Mexico.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title:"SUCA",
      techStack: [
        "c#",
        "SQL"
      ],
      description: "Desktop platform for generating administrative and predictive statistics for surgical procedures at the Central University Hospital in Chihuahua, Mexico.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
  conferences: [
    {
      name: "Synergy: Biomedical Engineering and Artificial Intelligence",
      place: "Coloquio de ingenieria biomedica (IBERO Puebla)",
      date: "2023",
      description:
        "AI's transformative role in biomedical engineering—touching on applications, new paradigms, and exciting opportunities for healthcare advancements."
    },
    {
      name: "The importance of neuroscience in biomedical engineering",
      place: "Congreso de la Ingeniería Biomédica (IPN)",
      date: "2023",
      description:
        "Explored the critical role of neuroscience in biomedical engineering, highlighting its significance in shaping innovative solutions and advancements in healthcare."
    },
    {
      name: "Imagined Speech Recognition in a Subject Independent Approach Using Prototypical Network",
      place: "Congreso Nacional de Ingeniería Biomédica",
      date: "2022",
      description:
        "Explored a subject-independent approach to imagined speech recognition using Prototypical Network and Brain-Computer Interface (BCI), showcasing innovative methods for advancing speech technology and neuroengineering."
    },
  ]
} as const;
