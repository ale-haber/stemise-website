import type { LucideIcon } from "lucide-react";
import {
  Atom,
  BookOpen,
  Boxes,
  Globe,
  HandHeart,
  Heart,
  Layers3,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import hackclubLogo from "@/assets/hackclub-logo.png";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
import stocableLogo from "@/assets/stocable-logo.png";
import finsionsLogo from "@/assets/finsions-logo.png";
import teamRyanAhn from "@/assets/team-ryan-ahn.png";
import teamHyunjunYi from "@/assets/team-hyunjun-yi.jpg";
import teamLandonMahler from "@/assets/team-landon-mahler.jpg";
import teamHarryHonig from "@/assets/team-harry-honig.jpeg";

import teamDevanshBhalla from "@/assets/team-devansh-bhalla.jpg";
import teamChristopherHuang from "@/assets/team-christopher-huang.jpg";
import teamArunButtey from "@/assets/arun-b.png";
import teamRishiShah from "@/assets/team-rishi-shah.jpg";
import kitRobotics from "@/assets/kit-robotics.png";
import kitElectronics from "@/assets/kit-electronics.png";
import kitCoding from "@/assets/kit-coding.png";
import kitBiology from "@/assets/kit-biology.png";
import kitMath from "@/assets/kit-math.png";
import curriculaAi from "@/assets/curricula-ai.webp";
import curriculaRobotics from "@/assets/curricula-robotics.png";
import curriculaWebdev from "@/assets/curricula-webdev.png";
import curriculaPython from "@/assets/curricula-python.png";
import curriculaR from "@/assets/curricula-r.png";
import curriculaJava from "@/assets/curricula-java.png";

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type EventOrganization = {
  id: string;
  name: string;
  logo?: string;
  href?: string;
};

export type SiteEvent = {
  id: string;
  slug: string;
  title: string;
  status: string;
  date: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  featuredOnHome: boolean;
  accentTheme?: "blue" | "orange" | "lime" | "ink";
  href?: string;
  hrefLabel?: string;
  image?: string;
  imageAlt?: string;
  sponsors?: EventOrganization[];
  professionals?: EventOrganization[];
};

export type HomeEvent = SiteEvent;
export type EventSponsor = EventOrganization;

export type HomeImpactMetric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type HomeImpactCountry = {
  label: string;
  mapNames: string[];
};

export type TeamMember = {
  id: string;
  title: string;
  name: string;
  bio: string;
  photo: string;
  founder?: boolean;
  socials: {
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
};

export type SupporterLogo = {
  id: string;
  name: string;
  src: string;
  href?: string;
};

export type KitCatalogItem = {
  id: string;
  name: string;
  description: string;
  grades: string;
  students: string;
  availability: string;
  materials: string[];
  image: string;
};

export const externalLinks = {
  donate: "https://hcb.hackclub.com/donations/start/stemise",
  volunteer:
    "https://docs.google.com/forms/d/e/1FAIpQLScjG7wtCcd52K3lIIEtxgEkn2YdP7JDwNwRBa3y5KeSkADOwA/viewform?usp=header",
  linkedin: "https://linkedin.com/company/stemise",
  instagram: "https://www.instagram.com/stemise_official/",
  tiktok: "https://www.tiktok.com/@stemise_official",
  discord: "https://discord.gg/dHYPMrsD8U",
};

export const fiscalSponsor = {
  name: "The Hack Foundation (d.b.a. Hack Club)",
  status: "501(c)(3) fiscal sponsor",
  ein: "81-2908499",
  logo: hackclubLogo,
  description:
    "STEMise is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), which enables tax-deductible donations that support our nonprofit work.",
};

export const impactStats = [
  {
    value: "5,000+",
    label: "Students reached",
    detail: "Through kits, workshops, and learning programs.",
  },
  {
    value: "150+",
    label: "Schools and communities served",
    detail: "Built for classrooms, clubs, and local programs.",
  },
  {
    value: "25+",
    label: "Countries represented",
    detail: "A youth-led effort with global reach.",
  },
  {
    value: "100%",
    label: "Lightweight access model",
    detail: "Free kit requests, open curriculum, and external action flows.",
  },
];

export const homeImpactMetrics: HomeImpactMetric[] = [
  {
    value: 15,
    suffix: "k",
    label: "Impressions",
  },
  {
    value: 330,
    suffix: "+",
    label: "Impacted",
  },
  {
    value: 100,
    suffix: "+",
    label: "Members",
  },
  {
    value: 79,
    label: "Countries",
  },
];

export const homeImpactCountries: HomeImpactCountry[] = [
  { label: "USA", mapNames: ["USA"] },
  { label: "South Korea", mapNames: ["South Korea"] },
  { label: "France", mapNames: ["France"] },
  { label: "Nigeria", mapNames: ["Nigeria"] },
  { label: "India", mapNames: ["India"] },
  { label: "Vietnam", mapNames: ["Vietnam"] },
  { label: "Canada", mapNames: ["Canada"] },
  { label: "UAE", mapNames: ["United Arab Emirates"] },
  { label: "Nepal", mapNames: ["Nepal"] },
  { label: "Kenya", mapNames: ["Kenya"] },
  { label: "China", mapNames: ["China"] },
  { label: "Malaysia", mapNames: ["Malaysia"] },
  { label: "Saudi Arabia", mapNames: ["Saudi Arabia"] },
  { label: "Pakistan", mapNames: ["Pakistan"] },
  { label: "Phillippines", mapNames: ["Philippines"] },
  { label: "Hong Kong", mapNames: ["China"] },
  { label: "Bangladesh", mapNames: ["Bangladesh"] },
  { label: "Portugal", mapNames: ["Portugal"] },
  { label: "Paraguay", mapNames: ["Paraguay"] },
  { label: "Germany", mapNames: ["Germany"] },
  { label: "Iraq", mapNames: ["Iraq"] },
  { label: "Australia", mapNames: ["Australia"] },
  { label: "South Africa", mapNames: ["South Africa"] },
  { label: "Egypt", mapNames: ["Egypt"] },
  { label: "Romania", mapNames: ["Romania"] },
  { label: "Brazil", mapNames: ["Brazil"] },
  { label: "Singapore", mapNames: ["Singapore"] },
  { label: "Senegal", mapNames: ["Senegal"] },
  { label: "Dominican Republic", mapNames: ["Dominican Rep."] },
  { label: "Burma", mapNames: ["Myanmar"] },
  { label: "Thailand", mapNames: ["Thailand"] },
  { label: "Uzbekistan", mapNames: ["Uzbekistan"] },
  { label: "United Kingdom", mapNames: ["England"] },
  { label: "Iran", mapNames: ["Iran"] },
  { label: "Turkey", mapNames: ["Turkey"] },
  { label: "Argentina", mapNames: ["Argentina"] },
  { label: "Morocco", mapNames: ["Morocco"] },
  { label: "Ukraine", mapNames: ["Ukraine"] },
  { label: "Mexico", mapNames: ["Mexico"] },
  { label: "Kazakhstan", mapNames: ["Kazakhstan"] },
  { label: "Malawi", mapNames: ["Malawi"] },
  { label: "Latvia", mapNames: ["Latvia"] },
  { label: "Japan", mapNames: ["Japan"] },
  { label: "Malta", mapNames: ["Malta"] },
  { label: "Iceland", mapNames: ["Iceland"] },
  { label: "Ethiopia", mapNames: ["Ethiopia"] },
  { label: "Peru", mapNames: ["Peru"] },
  { label: "Cameroon", mapNames: ["Cameroon"] },
  { label: "Namibia", mapNames: ["Namibia"] },
  { label: "Indonesia", mapNames: ["Indonesia"] },
  { label: "Algeria", mapNames: ["Algeria"] },
  { label: "Tunisia", mapNames: ["Tunisia"] },
  { label: "Ghana", mapNames: ["Ghana"] },
  { label: "Greece", mapNames: ["Greece"] },
  { label: "Sri Lanka", mapNames: ["Sri Lanka"] },
  { label: "Italy", mapNames: ["Italy"] },
  { label: "Colombia", mapNames: ["Colombia"] },
  { label: "Benin", mapNames: ["Benin"] },
  { label: "Cambodia", mapNames: ["Cambodia"] },
  { label: "Mongolia", mapNames: ["Mongolia"] },
  { label: "Laos", mapNames: ["Laos"] },
  { label: "Israel", mapNames: ["Israel"] },
  { label: "Syria", mapNames: ["Syria"] },
  { label: "Serbia", "mapNames": ["Serbia"] },
  { label: "Bosnia and Herzegovina", mapNames: ["Bosnia and Herz."] },
  { label: "Cyprus", mapNames: ["Cyprus"] },
  { label: "Estonia", mapNames: ["Estonia"] },
  { label: "Ireland", mapNames: ["Ireland"] },
  { label: "Northern Ireland", mapNames: ["Northern Ireland"] },
  { label: "Ecuador", mapNames: ["Ecuador"] },
  { label: "Panama", mapNames: ["Panama"] },
  { label: "Lebanon", mapNames: ["Lebanon"] },
  { label: "Chile", mapNames: ["Chile"] },
  { label: "Qatar", mapNames: ["Qatar"] },
  { label: "Armenia", mapNames: ["Armenia"] },
  { label: "Montenegro", mapNames: ["Montenegro"] },
  { label: "Liberia", mapNames: ["Liberia"] },
  { label: "Netherland", mapNames: ["Netherlands"] },
  { label: "Lithuania", mapNames: ["Lithuania"] },
];

export const homeServices: IconCard[] = [
  {
    icon: Boxes,
    title: "Free STEM Kits",
    description:
      "Hands-on kits for experiments, builds, and guided learning.",
  },
  {
    icon: BookOpen,
    title: "Open Curriculum",
    description:
      "Simple learning paths by age and topic.",
  },
  {
    icon: Layers3,
    title: "Workshops",
    description:
      "Live sessions that turn lessons into real projects.",
  },
];

export const audienceHighlights: IconCard[] = [
  {
    icon: Sparkles,
    title: "For kids",
    description:
      "Fun, visual, and easy to try.",
  },
  {
    icon: Users,
    title: "For parents",
    description:
      "Clear paths, trusted nonprofit support, real learning.",
  },
  {
    icon: HandHeart,
    title: "For schools",
    description:
      "Ready for classrooms, clubs, and community groups.",
  },
];

export const siteEvents: SiteEvent[] = [];

export const aboutValues: IconCard[] = [
  {
    icon: Globe,
    title: "Access first",
    description:
      "We design for students who may not already have easy access to engaging STEM opportunities.",
  },
  {
    icon: Rocket,
    title: "Build to learn",
    description:
      "We believe hands-on experimentation helps learners understand concepts faster and remember them longer.",
  },
  {
    icon: Atom,
    title: "Curiosity with structure",
    description:
      "Our work combines playful exploration with practical guides, age grouping, and clear teaching paths.",
  },
  {
    icon: Heart,
    title: "Community-led growth",
    description:
      "STEMise grows through volunteers, partners, and supporters who share the goal of widening STEM access.",
  },
];

export const kitCatalog: KitCatalogItem[] = [
  {
    id: "color-change-chemistry",
    name: "Color Change Chemistry Kit",
    description:
      "Use red cabbage, vitamin C, and baking soda to explore acids, bases, and titration through visible color shifts.",
    grades: "K-8",
    students: "Individual or groups of 2-5",
    availability: "Available now",
    materials: ["Red cabbage", "Vitamin C", "Baking soda", "Guided activity sheet"],
    image: kitRobotics,
  },
  {
    id: "physics-catapult",
    name: "Easy Physics Catapult Kit",
    description:
      "A beginner-friendly popsicle stick catapult that introduces gravity, force, and projectile motion through play.",
    grades: "K-5",
    students: "Individual or groups of 2-6",
    availability: "Available now",
    materials: ["Popsicle sticks", "Bottle cap", "Rubber bands", "Build guide"],
    image: kitElectronics,
  },
  {
    id: "rock-candy",
    name: "Rock Candy Crystallization Kit",
    description:
      "A chemistry activity focused on crystal formation, patience, and observation with a simple edible experiment.",
    grades: "K-8",
    students: "Individual",
    availability: "Limited release",
    materials: ["Sugar materials", "Crystallization guide", "Observation prompts"],
    image: kitCoding,
  },
  {
    id: "balloon-car",
    name: "Balloon-Powered Car Kit",
    description:
      "Learners build motion-powered vehicles to study air pressure, design choices, and testing through iteration.",
    grades: "K-5",
    students: "Groups of 3-9",
    availability: "Limited release",
    materials: ["Vehicle parts", "Balloon propulsion setup", "Challenge cards"],
    image: kitBiology,
  },
  {
    id: "chemistry-ice-cream",
    name: "Chemistry Ice Cream Kit",
    description:
      "A playful introduction to chemistry concepts through temperature change, mixture behavior, and kitchen science.",
    grades: "K-8",
    students: "Individual or groups of 2-4",
    availability: "Coming soon",
    materials: ["Ingredient list", "Experiment guide", "Reflection prompts"],
    image: kitMath,
  },
];

export const kitSupportItems = [
  "Clear request flow for schools, clubs, nonprofits, and community educators.",
  "Activity guides and lesson support so kits are ready to teach with.",
  "Worldwide request availability, subject to shipping and legal restrictions.",
  "Mix-and-match requests depending on what is currently in stock.",
];

export const kitFaqs = [
  {
    question: "Who can request STEM kits?",
    answer:
      "Educators, schools, community programs, libraries, and nonprofits can request kits. We especially care about underserved learners and classrooms that benefit from extra STEM access.",
  },
  {
    question: "Are the kits free?",
    answer:
      "STEM kits are offered free when available. In some cases, larger or specialized requests may require shipping coordination.",
  },
  {
    question: "What should people check before submitting?",
    answer:
      "Review kit availability, choose the kits that fit your learners, and tell us how you plan to use them so we can evaluate the request clearly.",
  },
  {
    question: "Do the kits include teaching materials?",
    answer:
      "Yes. Each kit is designed to include guidance that helps educators or facilitators run the activity with confidence.",
  },
];

export const curriculumBands = [
  {
    id: "primary",
    title: "Primary Path",
    ages: "Ages 6-10",
    summary:
      "Playful, visual STEM designed to introduce big ideas through tactile builds and easy-to-follow exploration.",
    outcomes: [
      "Short project cycles",
      "Friendly explanations",
      "Hands-on experiments",
    ],
    topics: [
      {
        name: "Biotech Basics",
        description:
          "Early biology and biotech ideas introduced through simple observation, experimentation, and curiosity-led prompts.",
        image: curriculaAi,
      },
      {
        name: "Robotics Play Lab",
        description:
          "Mechanical thinking, sensors, and movement through build-first robotics activities made for younger learners.",
        image: curriculaRobotics,
      },
      {
        name: "Creative Coding",
        description:
          "An approachable coding entry point using patterns, logic, and interactive projects instead of heavy theory.",
        image: curriculaPython,
      },
    ],
  },
  {
    id: "middle-school",
    title: "Middle School Path",
    ages: "Ages 11-13",
    summary:
      "Clear progression for learners who are ready for more challenge while still benefiting from guided, project-based structure.",
    outcomes: [
      "Topic-based modules",
      "Build and explain",
      "Workshop-ready pacing",
    ],
    topics: [
      {
        name: "Python Foundations",
        description:
          "Core programming skills, problem-solving, and logic in a format that stays practical and easy to scan.",
        image: curriculaPython,
      },
      {
        name: "Web Development",
        description:
          "Design, structure, and front-end basics taught through creative web projects that feel modern and relevant.",
        image: curriculaWebdev,
      },
      {
        name: "Applied Robotics",
        description:
          "A next-step robotics track that connects movement, systems thinking, and iterative improvement.",
        image: curriculaRobotics,
      },
    ],
  },
  {
    id: "high-school",
    title: "High School Path",
    ages: "Ages 14-18",
    summary:
      "Deeper STEM topics for teens who want stronger technical foundations, bigger projects, and more advanced direction.",
    outcomes: [
      "More technical depth",
      "Career-adjacent topics",
      "Project portfolio potential",
    ],
    topics: [
      {
        name: "Artificial Intelligence",
        description:
          "Machine learning and AI concepts framed in an accessible way for motivated teen learners.",
        image: curriculaAi,
      },
      {
        name: "Java and Software Logic",
        description:
          "Object-oriented thinking, software structure, and coding practice for students ready to go further.",
        image: curriculaJava,
      },
      {
        name: "Data and Research Tools",
        description:
          "Analysis, scientific thinking, and data storytelling with tools like R and practical datasets.",
        image: curriculaR,
      },
    ],
  },
];

export const workshopHighlights: IconCard[] = [
  {
    icon: Sparkles,
    title: "Project-based sessions",
    description:
      "Workshops are built to feel active, not passive, with a clear project or experiment in each session.",
  },
  {
    icon: Globe,
    title: "Built for a global audience",
    description:
      "The structure supports learners and facilitators across different regions and community contexts.",
  },
  {
    icon: Users,
    title: "Designed for groups",
    description:
      "Useful for classrooms, clubs, local programs, and anyone who wants a guided entry point into STEM topics.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "ryan-ahn",
    title: "Executive Director",
    name: "Ryan Ahn",
    bio: "Founder of STEMise and a student leader focused on scaling STEM access worldwide through strong nonprofit direction.",
    photo: teamRyanAhn,
    founder: true,
    socials: {
      linkedin: "https://www.linkedin.com/in/ryan-ahn-81322736a/",
    },
  },
  {
    id: "hyunjun-yi",
    title: "Deputy Executive Director",
    name: "Hyunjun Yi",
    bio: "Leads partnerships and execution while helping turn STEMise from an early idea into an international youth-led organization.",
    photo: teamHyunjunYi,
    socials: {
      linkedin: "https://www.linkedin.com/in/hyunjun-yi-3424573a0/",
    },
  },
  {
    id: "landon-mahler",
    title: "Chief of Staff",
    name: "Landon Mahler",
    bio: "Supports strategic management, team coordination, and sustainable growth across STEMise operations.",
    photo: teamLandonMahler,
    socials: {
      linkedin: "https://www.linkedin.com/in/landon-mahler-14573a3a1/",
    },
  },
  {
    id: "harry-honig",
    title: "Head of Operations",
    name: "Harry Honig",
    bio: "Builds systems for onboarding, coordination, and execution so programs can run efficiently at global scale.",
    photo: teamHarryHonig,
    socials: {
      linkedin: "https://www.linkedin.com/in/harry-honig-56b3b6303/",
    },
  },
  {
    id: "team-71842301",
    title: "Head of Technology",
    name: "Alessandro Haber",
    bio: "Designs and manages the technical systems that keep STEMise reliable, accessible, and student-centered.",
    photo: "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/21e34783-8d43-407e-982d-789974484544.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/alehaber",
    },
  },
  {
    id: "devansh-bhalla",
    title: "Head of Marketing",
    name: "Devansh Bhalla",
    bio: "Leads graphic design and marketing strategy to help STEMise look cohesive and reach new audiences.",
    photo: teamDevanshBhalla,
    socials: {
      linkedin: "https://www.linkedin.com/in/devansh-bhalla-b2a45a382",
    },
  },
  {
    id: "christopher-huang",
    title: "Head of Education",
    name: "Christopher Huang",
    bio: "Shapes curriculum strategy and educational direction with a focus on rigor, relevance, and global reach.",
    photo: teamChristopherHuang,
    socials: {
      linkedin: "https://www.linkedin.com/in/christopher-h878/",
    },
  },
  {
    id: "arun-buttey",
    title: "Director of Outreach",
    name: "Arun Buttey",
    bio: "Expands STEMise visibility and helps connect the organization to more learners and communities worldwide.",
    photo: teamArunButtey,
    socials: {},
  },
  {
    id: "rishi-shah",
    title: "Head of Finances",
    name: "Rishi Shah",
    bio: "Supports finance strategy and sustainable planning so STEMise can keep growing its nonprofit impact responsibly.",
    photo: teamRishiShah,
    socials: {
      linkedin: "https://www.linkedin.com/in/rishi-shah-6338512a5",
    },
  },
];

export const partnerLogos: SupporterLogo[] = [
  { id: "partner-1", name: "Partner 1", src: partnerLogo1 },
  { id: "partner-2", name: "Partner 2", src: partnerLogo2 },
  { id: "partner-3", name: "Partner 3", src: partnerLogo3 },
  { id: "partner-4", name: "Partner 4", src: partnerLogo4 },
  { id: "supporter-stocable", name: "Stocable", src: stocableLogo, href: "https://stocable.vercel.app/" },
  { id: "supporter-finsions", name: "Finsions", src: finsionsLogo, href: "https://finsions.org/" },
];
