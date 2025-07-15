import { GitHubIcon, LinkedInIcon, VSCOIcon, ResearchgateIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jesus Alan Hernandez Galvan",
  initials: "JAH",
  location: "Chihuahua, Chihuahua, Mexico",
  locationLink: "https://maps.app.goo.gl/ikgFPaZ2UnWm4UU66",
  about:
    "Recent graduate in biomedical engineering with 6 years of hands-on research experience in multiple laboratories in Mexico and Japan. Published researcher with 4 publications in AI/ML applications for healthcare. Passionate about Brain-Computer Interfaces and Artificial Intelligence, with proven leadership skills and industry experience applying research expertise to practical solutions.",
  summary:
    "Biomedical Engineer with extensive research background spanning EEG signal processing, molecular property prediction, and medical AI applications. Co-authored 4 publications while leading research initiatives across international collaborations. Currently transitioning research expertise to industry, with demonstrated ability to develop scalable software solutions and lead cross-functional teams.",
  avatarUrl: "ProfileP.jpg",
  personalWebsiteUrl: "https://unlikeghost.github.io/",
  contact: {
    email: "alanhernandezgalvan@icloud.com",
    tel: "(+52)614-462-7052",
    social: [
      {
        name: "Researchgate",
        url: "https://www.researchgate.net/profile/Jesus-Hernandez-100",
        icon: ResearchgateIcon,
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
        name: "VSCO",
        url: "https://vsco.co/jesusalanhernandezg/gallery",
        icon: VSCOIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Autónoma de Chihuahua, Facultad de Medicina y Ciencias Biomédicas",
      degree: "Bachelor of Biomedical Engineering",
      start: "Jul 2018",
      end: "Dec 2024",
      description: "Graduated with Special Mention • Thesis: 'ESTRATEGIAS PARA LA PARALELIZACIÓN DE MODELOS EN ENTORNOS MULTI-GPU'"
    },
  ],
  work: [
    {
      company: "Safran Engineering Services",
      link: "",
      badges: ["Mexico", "Innovation"],
      title: "Innovation Engineer",
      start: "Mar 2024",
      end: "Jul 2025",
      description:
        "Established foundational infrastructure for new innovation department across Americas region. Developed AI-powered CV classification tool using LLMs and OCR-based validation systems. Collaborated with international teams across France, India, and Mexico. Presented technical results to C-level executives including CTO and CEO."
    },
    {
      company: "Biomedical Solutions Eonia",
      link: "",
      badges: ["Mexico", "Startup"],
      title: "Co-founder / Technical Lead",
      start: "Oct 2023",
      end: "Present",
      description:
        "Co-founded startup developing technology solutions for healthcare applications. Build backend systems and APIs for medical software projects. Develop AI models for disease prediction, medical image segmentation, and clinical classification tasks."
    },
    {
      company: "AI & Medical Computing Lab, Universidad Autónoma de Chihuahua",
      link: "",
      badges: ["Mexico", "Research"],
      title: "Research Assistant",
      start: "2023",
      end: "2025",
      description:
        "Conceived and developed ScOPE algorithm - a novel parameter-free, training-free approach for molecular property prediction that outperformed state-of-the-art AUC benchmarks. Leading author on research article currently under review for publication in high-impact journal."
    },
    {
      company: "Computer Vision Lab, Universidad Autónoma de Chihuahua",
      link: "",
      badges: ["Mexico", "Research"],
      title: "Undergraduate Researcher",
      start: "2021",
      end: "2023",
      description:
        "Developed subject-independent EEG-based speech recognition system using prototypical networks. Published first-author research in high-impact journal (Biomedical Signal Processing and Control, IF: 5.899). Reduced data requirements by 90% compared to traditional methods."
    },
    {
      company: "Mirai Innovation Research Institute",
      link: "https://www.mirai-innovation-lab.com/",
      badges: ["Osaka, Japan", "Research"],
      title: "Undergraduate Researcher",
      start: "2020",
      end: "2021",
      description:
        "Developed AI-powered voice-based disease prediction system using natural language processing. Created COVID-19 compliance web application with face recognition and mask detection systems. Contributed to neuromarketing and robotic BCI research projects."
    },
    {
      company: "Computational Physical Chemistry Lab, Universidad Autónoma de Chihuahua",
      link: "",
      badges: ["Mexico", "Research"],
      title: "Undergraduate Researcher",
      start: "2018",
      end: "2025",
      description:
        "Developed drug interaction prediction system using random forest algorithms. Deployed maternal and fetal mortality risk assessment model to production. Implemented first multi-GPU segmentation network using PyTorch DDP with NCCL backend in the faculty."
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "NumPy",
    "SciPy",
    "Pandas",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "RESTful APIs",
    "SQLAlchemy",
    "JavaScript",
    "C++",
    "SQL",
    "Git",
    "Docker",
    "NGINX",
    "MySQL",
    "PostgreSQL",
    "MongoDB"
  ],
  publications: [
    {
      title: "A prototypical network for few-shot recognition of speech imagery data",
      description: "Biomedical Signal Processing and Control, 86 (2023)",
      link: {
        label: "10.1016/j.bspc.2023.105154",
        href: "https://doi.org/10.1016/j.bspc.2023.105154",
      },
    },
    {
      title: "Validación de un modelo de inteligencia artificial para la predicción de la mortalidad del paciente con sepsis",
      description: "Medicina Interna de México, 40(3) (2024)",
      link: {
        label: "10.24245/mim.v40i3.9023",
        href: "https://doi.org/10.24245/mim.v40i3.9023",
      },
    },
    {
      title: "Outcome classification model for Covid-19 patients using artificial intelligence",
      description: "Salud Pública de México, 65(1) (2023)",
      link: {
        label: "10.21149/13547",
        href: "https://doi.org/10.21149/13547",
      },
    },
    {
      title: "Imagined Speech Recognition in a Subject Independent Approach Using a Prototypical Network",
      description: "XLV Mexican Conference on Biomedical Engineering (2022)",
      link: {
        label: "10.1007/978-3-031-18256-3_4",
        href: "https://doi.org/10.1007/978-3-031-18256-3_4",
      },
    },
  ],
  projects: [
    {
      title: "ScOPE Algorithm",
      techStack: [
        "Python",
        "SMILES",
        "Compression Algorithms",
      ],
      description: "Novel parameter-free, training-free approach for molecular property prediction that outperformed state-of-the-art AUC benchmarks on multiple datasets (BBBP, HIV, BACE, ClinTox).",
      link: {
        label: "Research Article (Under Review)",
        href: "",
      },
    },
    {
      title: "EEG Speech Recognition System",
      techStack: [
        "PyTorch",
        "Prototypical Networks",
        "EEG Signal Processing",
      ],
      description: "Subject-independent EEG-based speech recognition system using meta-learning that reduced data requirements by 90% while maintaining robust cross-device performance.",
      link: {
        label: "Published Research",
        href: "https://doi.org/10.1016/j.bspc.2023.105154",
      },
    },
    {
      title: "Multi-GPU Segmentation Network",
      techStack: [
        "PyTorch",
        "DDP",
        "NCCL",
        "Multi-GPU Computing"
      ],
      description: "First multi-GPU computational implementation in the faculty using distributed PyTorch for medical image segmentation with automatic load balancing.",
      link: {
        label: "Thesis Project",
        href: "",
      },
    },
    {
      title: "AI-Powered CV Classifier",
      techStack: [
        "Python",
        "LLMs",
        "FastAPI",
        "OCR"
      ],
      description: "Developed for Safran Engineering Services to streamline recruitment process using job descriptions as reference criteria and OCR-based validation systems.",
      link: {
        label: "Industry Project",
        href: "",
      },
    },
  ],
  conferences: [
    {
      name: "Synergy: Biomedical Engineering and Artificial Intelligence",
      place: "Coloquio de Ingeniería Biomédica IBERO, Puebla",
      date: "2023",
      description:
        "Presented on AI's transformative role in biomedical engineering, discussing applications, new paradigms, and opportunities for healthcare advancements."
    },
    {
      name: "The Importance of Neuroscience in Biomedical Engineering",
      place: "Congreso de la Ingeniería Biomédica, Instituto Politécnico Nacional",
      date: "2023",
      description:
        "Explored the critical role of neuroscience in biomedical engineering, highlighting its significance in shaping innovative solutions and advancements in healthcare technology."
    },
    {
      name: "Imagined Speech Recognition Using Prototypical Networks",
      place: "Congreso Nacional de Ingeniería Biomédica SOMIB",
      date: "2022",
      description:
        "Presented subject-independent approach to imagined speech recognition using Prototypical Networks and Brain-Computer Interface (BCI), showcasing innovative methods for advancing speech technology and neuroengineering."
    },
  ],
  leadership: [
    {
      role: "Vice President",
      organization: "SOMIB (Society of Mexican Biomedical Engineers) - University Chapter",
      period: "Current"
    },
    {
      role: "Member",
      organization: "IEEE (Institute of Electrical and Electronics Engineers)",
      period: "Current"
    }
  ],

  languajes: [
    "Spanish (Native)",
    "English (B2/C1)",
  ],

  personalinterests: [
    "Travel",
    "Fitness",
    "Reading",
    "Hiking",
    "Photography",
    "Animals"
  ]
  
} as const;