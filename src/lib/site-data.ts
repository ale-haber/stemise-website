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
import teamRyanAhn from "@/assets/team-ryan-ahn.png";
import teamHyunjunYi from "@/assets/team-hyunjun-yi.jpg";
import teamLandonMahler from "@/assets/team-landon-mahler.jpg";
import teamHarryHonig from "@/assets/team-harry-honig.jpeg";
import dshPitchLogo from "@/assets/dsh_pitch_logo.png";
import stemflixLogo from "@/assets/stemflix_2.png";
import iyrsLogo from "@/assets/IYRS.png";
import piMathLogo from "@/assets/PiMath.png";
import aiscendLogo from "@/assets/aiscend.png";
import eulerLogo from "@/assets/eulercircle.png";
import ccLogo from "@/assets/culturing-curiosities.png";
import nontrivialLogo from "@/assets/non-trivial.png";
import hthLogo from "@/assets/HowToHackathon.png";
import edtechLogo from "@/assets/edtech.png";

import teamEthenC from "@/assets/team-ethen-c.jpg";
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
import professionalApple from "@/assets/icons/Apple-Logo.png";
import professionalAmazon from "@/assets/icons/amazon.png";
import professionalAws from "@/assets/icons/L0_logo_aws_250x250.png";
import professionalMeta from "@/assets/icons/Meta-facebook-New-Logo-700x394-1.png";
import professionalJpmorgan from "@/assets/icons/2000px-J_P_Morgan_Logo_2008_1.svg_.png";
import professionalHcl from "@/assets/icons/200000000029592_1HCLTech_logo.png";
import professionalCitizens from "@/assets/icons/Citizens-Bank-Logo.png";
import professionalHighspot from "@/assets/icons/highspot-logo-1256x300-1.png";
import professionalOctery from "@/assets/icons/octery.png";
import professionalVisa from "@/assets/icons/visa-brandmark-blue-1960x622.png";
import professionalCisco from "@/assets/icons/Cisco.png";
import professionalParamount from "@/assets/icons/Paramount_Pics_logo.png";
import professionalCapitalOne from "@/assets/icons/capitalone.png";
import professionalGoogle from "@/assets/icons/google.png";
import professionalIbm from "@/assets/icons/ibm_PNG19658.png";
import professionalTMobile from "@/assets/icons/images.png";
import professionalOracle from "@/assets/icons/oracle.png";
import professionalPaypal from "@/assets/icons/paypal.png";
import professionalUsBank from "@/assets/icons/usbank.png";

import yimoImage from "@/assets/YIMO.png";

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
  extraLinks?: Array<{ label: string; href: string }>;
  image?: string;
  imageAlt?: string;
  sponsors?: EventOrganization[];
  professionals?: EventOrganization[];
  gallery?: string[];
  past?: boolean;
  upcoming?: boolean;
  pastStats?: Array<{ label: string; value: string }>;
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

export type CurriculumAgeGroup = {
  ages: string;
  slug: string;
  theme: "orange" | "green" | "blue" | "lime" | "ink";
  title: string;
  subtitle: string;
  resources: Record<string, unknown>[];
  resourcesTitle: string;
  heroButtonLabel: string;
  resourcesDescription: string;
};

export const externalLinks = {
  donate: "https://hcb.hackclub.com/donations/start/stemise",
  volunteer:
    "https://docs.google.com/forms/d/e/1FAIpQLSfb705bIjGc7djugB_J-c48qHcZWNKZsmRzmDiknwW1_ec-Gg/viewform?usp=dialog",
  linkedin: "https://linkedin.com/company/stemise",
  instagram: "https://www.instagram.com/stemise_official/",
  tiktok: "https://www.tiktok.com/@stemise_official",
  discord: "https://discord.gg/bFZguYqQ",
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
    "label": "USD Raised",
    "value": 35000,
    "prefix": "$"
  },
  {
    "label": "Reached & Impacted",
    "value": 100,
    "suffix": "k+"
  },
  {
    "label": "Members",
    "value": 100,
    "suffix": "+"
  },
  {
    "label": "Countries",
    "value": 89,
    "suffix": "+"
  },
  {
    "label": "Students Empowered",
    "value": 2000,
    "suffix": "+"
  },
  {
    "label": "Impressions",
    "value": 160,
    "suffix": "k+"
  }
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
  { label: "Botswana", mapNames: ["Botswana"] },
  { label: "Uganda", mapNames: ["Uganda"] },
  { label: "Rwanda", mapNames: ["Rwanda"] },
  { label: "Azerbaijan", mapNames: ["Azerbaijan"] },
  { label: "Bahrain", mapNames: ["Bahrain"] },
  { label: "Bolivia", mapNames: ["Bolivia"] },
  { label: "Ivory Coast", mapNames: ["Ivory Coast"] },
  { label: "Haiti", mapNames: ["Haiti"] },
  { label: "Spain", mapNames: ["Spain"] },
  { label: "Switzerland", mapNames: ["Switzerland"] },
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

export const siteEvents: SiteEvent[] = [
  {
    "id": "event-ab272f93",
    "date": "May 2026",
    "href": "https://www.yimo-official.org/",
    "slug": "youth-international-math-olympiad-yimo-",
    "image": "/math competition.png",
    "title": "Youth International Math Olympiad (YIMO I)",
    "status": "Completed",
    "imageAlt": "math YIMO competition",
    "location": "Online event",
    "sponsors": [
      {
        "id": "event-sponsor-ef8f2880",
        "href": "https://www.hudsonrivertrading.com/",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/1b886cb6-9f52-41f0-b825-9822949f9a48.png",
        "name": "Hudson River Trading"
      },
      {
        "id": "event-sponsor-aops",
        "href": "https://aops.com/",
        "logo": "/AoPS_Main_Logo_1.png",
        "name": "Art of Problem Solving (AoPS)"
      }
    ],
    "hrefLabel": "Visit YIMO",
    "accentTheme": "orange",
    "professionals": [],
    "featuredOnHome": false,
    "past": true,
    "pastStats": [
      { "label": "Registrations", "value": "303" },
      { "label": "Countries", "value": "53" },
      { "label": "Prizes awarded", "value": "$1.1k" }
    ],
    "gallery": ["https://via.placeholder.com/600x400?text=Zoom+Class"],
    "fullDescription": "NEXT Horizon and STEMise hosted a global virtual mathematics competition in May 2026, bringing together students from around the world to compete, collaborate, and challenge themselves in problem solving. The competition featured Middle School and High School divisions with individual and team rounds. Hudson River Trading sponsored the $1.1k prize pool.",
    "shortDescription": "A global virtual math competition for Middle and High School students, featuring individual and team rounds. Hosted by NEXT Horizon and STEMise, with a $1.1k prize pool sponsored by Hudson River Trading."
  },
  {
    "id": "event-d2a06b37",
    "date": "Completed",
    "href": "https://www.dshhacks.org/",
    "hrefLabel": "Visit Website",
    "extraLinks": [
      {
        "label": "View on Devpost",
        "href": "https://dsh-hacks-v1.devpost.com"
      }
    ],
    "slug": "dsh-hacks-v1",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/42a74435-291a-45d9-9bc1-191bb80c1908.jpg",
    "title": "DSH Hacks V1",
    "status": "Completed",
    "imageAlt": "",
    "location": "Online",
    "sponsors": [
      {
        "id": "event-sponsor-c4a86ba1",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/c016a5f3-dde7-4b9f-b358-ef6041e65737.png",
        "name": ""
      },
      {
        "id": "event-sponsor-b2ae4348",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/3d79a3e3-860b-483e-a5ec-c5ddf1d26cbb.png",
        "name": ""
      },
      {
        "id": "event-sponsor-ffbc619b",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/15597e81-1759-420d-ab32-121cabe3c767.png",
        "name": ""
      },
      {
        "id": "event-sponsor-7f021fc1",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/b9749228-af8d-45b1-952d-760a0f3bfa14.jpg",
        "name": ""
      },
      {
        "id": "event-sponsor-bc770fb7",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/2810062b-b61c-4aa2-bce2-8248837bedf1.png",
        "name": ""
      },
      {
        "id": "event-sponsor-09aade7e",
        "href": "",
        "logo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/events/sponsors/9a842fed-f482-4487-a612-79d43079a605.png",
        "name": ""
      },
      {
        "id": "event-sponsor-codecrafters",
        "href": "",
        "logo": "/code crafters.png",
        "name": "Code Crafters"
      },
      {
        "id": "event-sponsor-crackd",
        "href": "https://crackd.it/",
        "logo": "/crackd.png",
        "name": "Crackd"
      },
      {
        "id": "event-sponsor-iteration-machines",
        "href": "https://www.iterationmachine.com/",
        "logo": "/iteration machines.png",
        "name": "Iteration Machines"
      },
      {
        "id": "event-sponsor-cleanshot",
        "href": "https://cleanshot.com/",
        "logo": "/clean shot.png",
        "name": "CleanShot"
      }
    ],
    "accentTheme": "blue",
    "professionals": [],
    "featuredOnHome": false,
    "past": true,
    "upcoming": false,
    "pastStats": [
      { "label": "Registrations", "value": "1312" },
      { "label": "Countries", "value": "74" },
      { "label": "Professional judges", "value": "90" }
    ],
    "fullDescription": "With 1312 registrations, 74 unique countries, and 90 professional judges, DSH Hacks V1 was an incredible global success. Hosted collaboratively by DeltaForge Hacks, NextHorizon, and STEMise.",
    "shortDescription": "DSH Hacks V1 was a global student competition open to students aged 13+ hosted collaboratively by three youth-led organizations: DeltaForge Hacks, NextHorizon, and STEMise."
  },
  {
    "id": "event-stemflix",
    "date": "August 17 - October 18th",
    "href": "https://docs.google.com/forms/d/e/1FAIpQLSdMUux6YfLz2y73euCPfmRd2xTbHZggem0LXWBJDzpWlQg7-g/viewform?usp=publish-editor",
    "slug": "stemflix-video-competition",
    "image": stemflixLogo,
    "title": "STEMFlix Video Competition",
    "status": "Upcoming",
    "imageAlt": "STEMFlix Video Competition",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "Register here",
    "accentTheme": "blue",
    "professionals": [],
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "fullDescription": "STEMise and STEMist are excited to announce the STEMFlix Video Competition, a global competition focused on short-form video content that allows students to explore and explain rigorous STEM topics. STEMFlix promotes agency and encourages students to become teachers; an experience that boosts creativity and builds a complex understanding.",
    "shortDescription": ""
  },
  {
    "id": "event-iyrs",
    "date": "August 17, 2026 - April 18, 2027",
    "href": "",
    "slug": "iyrs",
    "image": iyrsLogo,
    "title": "International Youth Research Symposium (IYRS)",
    "status": "Upcoming",
    "imageAlt": "International Youth Research Symposium",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "",
    "accentTheme": "orange",
    "professionals": [],
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "fullDescription": "IYRS is a youth research competition co-hosted by STEMise and STEMist for high school and student researchers. Students may submit either a beginner research proposal or a full research paper, and entries are reviewed by experienced judges. Participants may also receive mentorship, feedback, and recognition for their work",
    "shortDescription": ""
  },
  {
    "id": "event-dsh-pitch",
    "date": "June 25th - September 21st",
    "href": "https://dsh-pitch-30500.devpost.com/",
    "slug": "dsh-pitch-competition",
    "image": dshPitchLogo,
    "title": "DSH Pitch Competition",
    "status": "Upcoming",
    "imageAlt": "DSH Pitch Competition",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "Join Now",
    "accentTheme": "blue",
    "professionals": [],
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "fullDescription": "DSH Pitch Competition is a global student pitch competition open to students aged 13+, hosted collaboratively by three youth-led organizations: DeltaForge Hacks, NextHorizon, and STEMise. This event brings together young innovators from around the world to transform bold ideas into compelling solutions at the intersection of STEM and entrepreneurship.",
    "shortDescription": ""
  },
  {
    "id": "event-yimo-2",
    "date": "August 29-30, 2026",
    "href": "https://docs.google.com/forms/d/e/1FAIpQLSeLKMy5cPHpOFhFUc8fukPBjMiJHl35aB3u7rkClPTw_VziVg/viewform?usp=header",
    "slug": "yimo-2",
    "image": yimoImage,
    "title": "YIMO II",
    "status": "Upcoming",
    "imageAlt": "YIMO 2",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "Register for YIMO II",
    "accentTheme": "orange",
    "professionals": [],
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "extraLinks": [
      {
        "label": "Visit Website",
        "href": "https://www.yimo-official.org/"
      }
    ],
    "fullDescription": "Following the success of our inaugural math tournament, YIMO returns for its second edition. The competition is designed to challenge middle and high school students with individual and team rounds, providing a platform to test problem-solving limits against peers from across the globe. Expect a rigorous, fair, and high-quality tournament format with divisions structured to give every math enthusiast a serious climb.",
    "shortDescription": "Youth International Math Olympiad returns August 29 and 30, 2026. A global online contest for students who like clean problems, fair rounds, and a serious climb."
  },
  {
    "id": "event-project-edtech",
    "date": "TBA",
    "href": "https://docs.google.com/forms/d/e/1FAIpQLScf1yOe1PJiXzDUjf6v3NDzc4J4lodvdIi-lnNgJkW2043bmw/viewform?usp=header",
    "slug": "edtech-platform",
    "image": edtechLogo,
    "title": "Project EdTech",
    "status": "Upcoming",
    "imageAlt": "",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "Register for the team",
    "accentTheme": "blue",
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "fullDescription": "We are launching a new initiative open to students worldwide titled Project EdTech. As the name may indicate, we are planning on developing a gamified EdTech platform (think of Duolingo but for STEM education) that would serve as the go-to platform for youths worldwide to learn more about STEM in depth. ",
    "shortDescription": ""
  },
  {
    "id": "event-project-aiscned",
    "date": "TBA",
    "href": "",
    "slug": "aiscend",
    "image": aiscendLogo,
    "title": "AiScend Research",
    "status": "upcoming",
    "imageAlt": "",
    "location": "Online",
    "sponsors": [],
    "hrefLabel": "",
    "accentTheme": "orange",
    "featuredOnHome": false,
    "past": false,
    "upcoming": true,
    "fullDescription": "AIscend Labs, a collaborative initiative between STEMise and NxtHorizon, advances responsible AI for social empowerment, with a core focus on the principles of MIT RAISE, to build ethical and impactful AI technologies that promote the values of equity, access, and positive societal outcomes. This lab bridges AI research with real-world education and social good, and emphasizes reproducibility and transparency with a focus on community-driven applications that empower diverse users rather than exacerbate inequalities.",
    "shortDescription": ""
  }

];

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
    "id": "color-change-chemistry",
    "name": "Color Change Chemistry Kit",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/kits/76e001b2-cfc0-48fa-9685-9ace771fd688.png",
    "grades": "K-8",
    "students": "Individual or groups of 2-5",
    "materials": [
      "Red cabbage",
      "Vitamin C",
      "Baking soda",
      "Guided activity sheet"
    ],
    "description": "Use red cabbage, vitamin C, and baking soda to explore acids, bases, and titration through visible color shifts.",
    "availability": "Available now"
  },
  {
    "id": "physics-catapult",
    "name": "Easy Physics Catapult Kit",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/kits/7ba0dfc0-6cb1-4d8a-8843-f6ac9b6cfa56.png",
    "grades": "K-5",
    "students": "Individual or groups of 2-6",
    "materials": [
      "Popsicle sticks",
      "Bottle cap",
      "Rubber bands",
      "Build guide"
    ],
    "description": "A beginner-friendly popsicle stick catapult that introduces gravity, force, and projectile motion through play.",
    "availability": "Available now"
  },
  {
    "id": "rock-candy",
    "name": "Rock Candy Crystallization Kit",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/kits/6e220e5c-69ec-480f-9600-725f06540395.png",
    "grades": "K-8",
    "students": "Individual",
    "materials": [
      "Sugar materials",
      "Crystallization guide",
      "Observation prompts"
    ],
    "description": "A chemistry activity focused on crystal formation, patience, and observation with a simple edible experiment.",
    "availability": "Limited release"
  },
  {
    "id": "balloon-car",
    "name": "Balloon-Powered Car Kit",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/kits/3952ad20-5641-4605-b54a-cd27b6c374c2.png",
    "grades": "K-5",
    "students": "Groups of 3-9",
    "materials": [
      "Vehicle parts",
      "Balloon propulsion setup",
      "Challenge cards"
    ],
    "description": "Learners build motion-powered vehicles to study air pressure, design choices, and testing through iteration.",
    "availability": "Limited release"
  },
  {
    "id": "chemistry-ice-cream",
    "name": "Chemistry Ice Cream Kit",
    "image": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/kits/184ebf56-bdcb-42a2-a743-299f718fcd55.png",
    "grades": "K-8",
    "students": "Individual or groups of 2-4",
    "materials": [
      "Ingredient list",
      "Experiment guide",
      "Reflection prompts"
    ],
    "description": "A playful introduction to chemistry concepts through temperature change, mixture behavior, and kitchen science.",
    "availability": "Coming soon"
  }
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
    "id": "primary",
    "title": "Primary School",
    "ages": "Ages 6-10",
    "theme": "orange",
    "summary": "Playful, visual, and structured learning paths for younger students who need clarity, rhythm, and confidence-building.",
    "outcomes": [
      "Short project cycles",
      "Friendly explanations",
      "Hands-on experiments"
    ],
    "topics": [
      {
        "name": "Biotech Basics",
        "description": "Early biology and biotech ideas introduced through simple observation, experimentation, and curiosity-led prompts.",
        "image": curriculaAi
      },
      {
        "name": "Robotics Play Lab",
        "description": "Mechanical thinking, sensors, and movement through build-first robotics activities made for younger learners.",
        "image": curriculaRobotics
      },
      {
        "name": "Creative Coding",
        "description": "An approachable coding entry point using patterns, logic, and interactive projects instead of heavy theory.",
        "image": curriculaPython
      }
    ]
  },
  {
    "id": "middle-school",
    "title": "Middle School",
    "ages": "Ages 11-13",
    "theme": "green",
    "summary": "Stronger project structure, clearer independent tasks, and room for students to explore bigger ideas with guidance.",
    "outcomes": [
      "Topic-based modules",
      "Build and explain",
      "Workshop-ready pacing"
    ],
    "topics": [
      {
        "name": "Python Foundations",
        "description": "Core programming skills, problem-solving, and logic in a format that stays practical and easy to scan.",
        "image": curriculaPython
      },
      {
        "name": "Web Development",
        "description": "Design, structure, and front-end basics taught through creative web projects that feel modern and relevant.",
        "image": curriculaWebdev
      },
      {
        "name": "Applied Robotics",
        "description": "A next-step robotics track that connects movement, systems thinking, and iterative improvement.",
        "image": curriculaRobotics
      }
    ]
  },
  {
    "id": "high-school",
    "title": "High School",
    "ages": "Ages 14-18",
    "theme": "blue",
    "summary": "Longer-form, academic, and more technical curriculum pages for older students who want depth and independent reading.",
    "outcomes": [
      "More technical depth",
      "Career-adjacent topics",
      "Project portfolio potential"
    ],
    "topics": [
      {
        "name": "Artificial Intelligence",
        "description": "Machine learning and AI concepts framed in an accessible way for motivated teen learners.",
        "image": curriculaAi
      },
      {
        "name": "Java and Software Logic",
        "description": "Object-oriented thinking, software structure, and coding practice for students ready to go further.",
        "image": curriculaJava
      },
      {
        "name": "Data and Research Tools",
        "description": "Analysis, scientific thinking, and data storytelling with tools like R and practical datasets.",
        "image": curriculaR
      }
    ]
  }
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

export const curriculumAgeGroups: CurriculumAgeGroup[] = [
  {
    "ages": "Ages 6-10",
    "slug": "primary",
    "theme": "orange",
    "title": "Primary School",
    "subtitle": "Playful, visual, and structured learning paths for younger students who need clarity, rhythm, and confidence-building.",
    "resources": [],
    "resourcesTitle": "Resources",
    "heroButtonLabel": "Browse primary curricula",
    "resourcesDescription": ""
  },
  {
    "ages": "Ages 11-13",
    "slug": "middle-school",
    "theme": "green",
    "title": "Middle School",
    "subtitle": "Stronger project structure, clearer independent tasks, and room for students to explore bigger ideas with guidance.",
    "resources": [],
    "resourcesTitle": "Resources",
    "heroButtonLabel": "Browse middle school curricula",
    "resourcesDescription": ""
  },
  {
    "ages": "Ages 14-18",
    "slug": "high-school",
    "theme": "blue",
    "title": "High School ",
    "subtitle": "Longer-form, academic, and more technical curriculum pages for older students who want depth and independent reading.",
    "resources": [],
    "resourcesTitle": "Resources",
    "heroButtonLabel": "Browse high school curricula",
    "resourcesDescription": ""
  }
];

export const teamMembers: TeamMember[] = [
  {
    "id": "ryan-ahn",
    "bio": "Founder of STEMise and a student leader focused on scaling STEM access worldwide through strong nonprofit direction.",
    "name": "Ryan Ahn",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/5a3860cf-9adf-4386-8c45-05254a47ed4d.JPG",
    "title": "Executive Director",
    "founder": true,
    "socials": {
      "linkedin": "https://www.linkedin.com/in/ryan-ahn-81322736a/"
    }
  },
  {
    "id": "team-c3f9410d",
    "bio": "Co-founded STEMise, working to inspire younger generations to pursue science and carry forward a legacy of accessible STEM learning.",
    "name": "Dongwon Lee",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/c2b7edcf-37dc-43f8-9c35-273bd7181c1c.jpg",
    "title": "Deputy Executive Director",
    "founder": true,
    "socials": {
      "tiktok": "",
      "linkedin": "https://www.linkedin.com/in/dongwon-lee-164231242/",
      "instagram": ""
    }
  },
  {
    "id": "hyunjun-yi",
    "bio": "Leads partnerships and execution while helping turn STEMise from an early idea into an international youth-led organization.",
    "name": "Hyunjun Yi",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/349010cf-a1f9-4eac-8703-8076001b1d80.jpg",
    "title": "Executive Director",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/hyunjun-yi-3424573a0/"
    }
  },
  {
    "id": "team-1fc9b150",
    "bio": "Keeps STEMise running smoothly by coordinating across teams and ensuring day-to-day operations stay aligned with the organization's mission.",
    "name": "Jayvant Rajesh",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/c7b7bceb-5c08-419d-bd1f-d2c7151a9dd6.jpg",
    "title": "Chief of Staff",
    "founder": false,
    "socials": {
      "tiktok": "",
      "linkedin": "www.linkedin.com/in/jayvant-r-3b8762360",
      "instagram": ""
    }
  },
  {
    "id": "team-71842301",
    "bio": "Designs and manages the technical systems that keep STEMise reliable, accessible, and student-centered.",
    "name": "Alessandro Haber",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/21e34783-8d43-407e-982d-789974484544.png",
    "title": "Head of Technology",
    "founder": false,
    "socials": {
      "tiktok": "",
      "linkedin": "https://www.linkedin.com/in/alehaber",
      "instagram": ""
    }
  },
  {
    "id": "devansh-bhalla",
    "bio": "Leads public relations and communications strategy to amplify STEMise's voice and connect the organization with new audiences worldwide.",
    "name": "Devansh Bhalla",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/a8169d64-588d-4848-b743-960ff8ba921e.jpg",
    "title": "Head of PR",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/devansh-bhalla-b2a45a382"
    }
  },
  {
    "id": "christopher-huang",
    "bio": "Shapes curriculum strategy and educational direction with a focus on rigor, relevance, and global reach.",
    "name": "Christopher Huang",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/e779c905-abe9-489a-8272-b6cabe448a9e.jpg",
    "title": "Head of Education",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/christopher-h878/"
    }
  },
  {
    "id": "ethan-chang",
    "bio": "Drives operational efficiency across STEMise by building the systems and workflows that keep the organization running smoothly as it scales.",
    "name": "Ethan Chang",
    "photo": teamEthenC,
    "title": "Head of Operations",
    "founder": false,
    "socials": {}
  },
  {
    "id": "rishi-shah",
    "bio": "Supports finance strategy and sustainable planning so STEMise can keep growing its nonprofit impact responsibly.",
    "name": "Arnav Deshmukh",
    "photo": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/team/ec7bfd91-2b5c-4d33-af40-aa6548fd5ce6.jpg",
    "title": "Head of Finances",
    "socials": {
      "linkedin": ""
    }
  },
  {
    "id": "ethan-yang",
    "bio": "Helped establish the foundations of STEMise and continues to shape its growth as a globally impactful youth-led STEM organization.",
    "name": "Ethan Yang",
    "photo": "/ethan.JPG",
    "title": "Executive",
    "founder": false,
    "socials": {}
  },
  {
    "id": "daniel-shim",
    "bio": "A founding member of STEMise whose early vision and commitment helped build the organization into the international community it is today.",
    "name": "Daniel Shim",
    "photo": "/shing.jpeg",
    "title": "Executive",
    "founder": false,
    "socials": {}
  }
];

export const homeProfessionals: SupporterLogo[] = [
  {
    id: "home-professional-apple",
    src: professionalApple,
    name: "Apple",
  },
  {
    id: "home-professional-amazon",
    src: professionalAmazon,
    name: "Amazon",
  },
  {
    id: "home-professional-aws",
    src: professionalAws,
    name: "Amazon Web Services",
  },
  {
    id: "home-professional-meta",
    src: professionalMeta,
    name: "Meta",
  },
  {
    id: "home-professional-jpmorgan",
    src: professionalJpmorgan,
    name: "J.P. Morgan",
  },
  {
    id: "home-professional-hcl",
    src: professionalHcl,
    name: "HCLTech",
  },
  {
    id: "home-professional-citizens",
    src: professionalCitizens,
    name: "Citizens Bank",
  },
  {
    id: "home-professional-highspot",
    src: professionalHighspot,
    name: "Highspot",
  },
  {
    id: "home-professional-octery",
    src: professionalOctery,
    name: "Octery",
  },
  {
    id: "home-professional-visa",
    src: professionalVisa,
    name: "Visa",
  },
  {
    id: "home-professional-cisco",
    src: professionalCisco,
    name: "Cisco",
  },
  {
    id: "home-professional-paramount",
    src: professionalParamount,
    name: "Paramount",
  },
  {
    id: "home-professional-capitalone",
    src: professionalCapitalOne,
    name: "Capital One",
  },
  {
    id: "home-professional-google",
    src: professionalGoogle,
    name: "Google",
  },
  {
    id: "home-professional-ibm",
    src: professionalIbm,
    name: "IBM",
  },
  {
    id: "home-professional-tmobile",
    src: professionalTMobile,
    name: "T-Mobile",
  },
  {
    id: "home-professional-oracle",
    src: professionalOracle,
    name: "Oracle",
  },
  {
    id: "home-professional-paypal",
    src: professionalPaypal,
    name: "PayPal",
  },
  {
    id: "home-professional-usbank",
    src: professionalUsBank,
    name: "U.S. Bank",
  },
];

export const partnerLogos: SupporterLogo[] = [
  {
    "id": "partner-1",
    "src": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/supporters/152b1485-d9d8-410d-9b54-23d3f26b217c.png",
    "href": "https://skitsforyouth.org/index.html",
    "name": "Skits For Youth"
  },

  {
    "id": "partner-3",
    "src": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/supporters/c97f4eaf-8fa5-4937-884b-b73a6431d009.png",
    "name": "Delta Forge"
  },
  {
    "id": "partner-4",
    "src": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/supporters/c39fbd27-5e7b-4b4c-9af4-b74e35463576.png",
    "href": "https://www.nxthorizon.org/",
    "name": "Next Horizon"
  },
  {
    "id": "supporter-1b3c03ec",
    "src": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/supporters/d61c9363-d0b4-4abb-81e1-c9fed082ed59.png",
    "href": "https://theexploratory.org/",
    "name": "Exploratory"
  },

  {
    "id": "supporter-e42801ae",
    "src": "https://jdrmfzufpwiqhbryoyfh.supabase.co/storage/v1/object/public/site-assets/supporters/fc92568f-8c6d-44c0-8389-deda922a62a0.png",
    "href": "https://www.joinstemist.org/",
    "name": "STEMist Education"
  },
  {
    "id": "partner-saintly",
    "src": "/Saintly.png",
    "name": "Saintly"
  },
  {
    "id": "partner-solvefire",
    "src": "/solvefire.png",
    "name": "SolveFire"
  },
  {
    "id": "partner-usamo-guide",
    "src": "/usamo guide.png",
    "name": "USAMO Guide"
  },
  {
    "id": "partner-pimath",
    "src": piMathLogo,
    "name": "Paqin Institute of Mathematics"
  },
  {
    "id": "partner-eulers-circle",
    "src": eulerLogo,
    "name": "The Euler Circle"
  },
  {
    "id": "partner-culturing-curiosities",
    "src": ccLogo,
    "name": "Culturing Curiosities"
  },
  {
    "id": "partner-non-trivial",
    "src": nontrivialLogo,
    "name": "Non-Trivial"
  },
  {
    "id": "parnter-how-to-hackathon",
    "src": hthLogo,
    "name": "HowtoHackathon"
  }
];
