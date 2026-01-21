import { img } from "framer-motion/client";
import { CodeIcon, PaletteIcon, MailIcon } from "lucide-react";

export type Project = {
  id: string;
  imgSrc: string;
  title: string;
  desc: string;
  category: "web" | "graphic" | "email" | "other";
  url?: string;
};

export const featuresData = [
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: <PaletteIcon className="w-6 h-6" />,
    title: "Graphic Design",
    desc: "Stunning visual designs including logos, branding, illustrations, and marketing materials that capture your vision.",
  },
  {
    icon: <MailIcon className="w-6 h-6" />,
    title: "Email Design",
    desc: "Engaging email templates and newsletters designed to boost engagement and drive conversions.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Web Essentials",
    price: "$799",
    desc: "Perfect for small businesses and startups.",
    credits: "One-time",
    features: [
      "Responsive website design",
      "Basic graphic design (logo + branding)",
      "Simple email template",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Creative Suite",
    price: "$2,499",
    desc: "Comprehensive design and development package.",
    credits: "Monthly",
    features: [
      "Everything in Web Essentials",
      "Advanced web development (React/Next.js)",
      "Full branding package",
      "Custom email campaigns",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Enterprise Design",
    price: "$5,999",
    desc: "For brands demanding excellence.",
    credits: "Custom",
    features: [
      "Everything in Creative Suite",
      "Dedicated design team",
      "Complex web applications",
      "Multi-platform graphic design",
      "Advanced email automation",
      "Ongoing maintenance & updates",
      "24/7 premium support",
    ],
  },
];

export const projectsData: Project[] = [
  // web development project
  {
    id: "proj-web-1",
    imgSrc: "/printastic.png",
    title: "Printastic Studio",
    desc: "printastic is a landing page, We're a passionate team of designers and print specialists transforming ideas into high-quality prints. From business cards to banners and custom merchandise, Printastic Studio combines years of industry experience with cutting-edge technology to deliver creative, print-ready solutions that elevate brands and drive results.",
    category: "web",
    url: "https://printastic-studio.vercel.app/",
  },
  {
    id: "proj-web-2",
    imgSrc: "/StoreApp.png",
    title: "ConvenStore",
    desc: "Built an interactive SaaS dashboard with real-time charts and user management.",
    category: "web",
    url: "https://convenience-store-client.vercel.app/",
  },
  {
    id: "proj-web-3",
    imgSrc: "/FitnessZone.png",
    title: "Fitness Zone",
    desc: "Built an interactive SaaS dashboard with real-time charts and user management.",
    category: "web",
    url: "https://fitness-app-client-uu4s.vercel.app/",
  },
  // graphic design project
  {
    id: "proj-graphic-1",
    imgSrc: "/SocialMediaPost.png",
    title: "Social Media Post",
    desc: "Created a cohesive brand identity including logo, color scheme, and marketing materials for a startup.",
    category: "graphic",
    url: "#",
  },
  {
    id: "proj-graphic-2",
    imgSrc: "/Poster.png",
    title: "Poster Design",
    desc: "Created a cohesive brand identity including logo, color scheme, and marketing materials for a startup.",
    category: "graphic",
    url: "#",
  },
  {
    id: "proj-graphic-3",
    imgSrc: "/Pedigree.png",
    title: "Static ads Design",
    desc: "Created a cohesive brand identity including logo, color scheme, and marketing materials for a startup.",
    category: "graphic",
    url: "#",
  },
  // email design project
  {
    id: "proj-email-1",
    imgSrc: "/images/work3.jpg",
    title: "Email Marketing Campaign",
    desc: "Designed and implemented an email marketing campaign that boosted open rates by 25%.",
    category: "email",
    url: "#",
  },
  // other project
  {
    id: "proj-other-1",
    imgSrc: "/mugDesign.png",
    title: "Mug Design",
    desc: "Print-ready promotional poster and social assets for an event.",
    category: "other",
    url: "#",
  },
];

export const faqData = [
  {
    question: "What web development technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various CMS platforms. We build responsive, fast, and scalable websites.",
  },
  {
    question: "Can you handle both print and digital graphic design?",
    answer:
      "Yes! Our graphic design services cover everything from digital assets (logos, social media graphics) to print materials (business cards, brochures, packaging).",
  },
  {
    question: "Do you design emails for marketing automation platforms?",
    answer:
      "Absolutely. We design email templates compatible with popular platforms like Mailchimp, Klaviyo, Sendinblue, and custom ESP integrations.",
  },
  {
    question: "How do you ensure designs are mobile-responsive?",
    answer:
      "All our designs start mobile-first. We use responsive design principles and thoroughly test across all devices and screen sizes.",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", url: "#" },
      { name: "Graphic Design", url: "#" },
      { name: "Email Design", url: "#" },
      { name: "Portfolio", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", url: "#" },
      { name: "Process", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", url: "#" },
      { name: "Case Studies", url: "#" },
      { name: "Free Tools", url: "#" },
    ],
  },
];
