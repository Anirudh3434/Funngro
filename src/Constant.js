import { FaBuilding, FaList, FaUser, FaProjectDiagram, FaDollarSign, FaHeart, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import carDekho from './assets/CarDekho.png';
import enerzySolar from './assets/EnerzySolar.png';
import mobigic from './assets/Mobigic.png';
import MaskGroup from './assets/MaskGroup.png';
import Darsh from './assets/Darsh.png'
import Ravishankar from './assets/Ravishankar.png'
import test from './assets/testimonial.png'


const funngroInfo = {
    PageTitle: "TEENLANCHER",
    description1: 'Real companies, real projects, real earnings and real money',
    description2: "Smart opportunities for the smart generation",
    downloadLinks: {
        googlePlay: "Get it on Google Play",
        appStore: "Download on the App Store"
    },
    stats: [
        { id: 1, label: 'Companies', value: '3500+', icon: FaBuilding },
        { id: 2, label: 'Categories', value: 12, icon: FaList },
        { id: 3, label: 'Teenlancers', value: "3000000+", icon: FaUser },
        { id: 4, label: 'Live Projects', value: "1000+", icon: FaProjectDiagram }
    ],
    benefits: [
        { id: 1, label: "First income", value: "Work with real companies and earn money", icon: FaDollarSign },
        { id: 2, label: "Passion", value: "Make your passion your profession", icon: FaHeart },
        { id: 3, label: "Learning", value: "Experiential learning by working on real projects", icon: FaGraduationCap },
        { id: 4, label: "Certification", value: "Build your profile with experience certificates", icon: FaCertificate }
    ],
    projectCategories: [
        { "icon": "👋", "name": "Social media marketing" },
        { "icon": "🎥", "name": "Video creation" },
        { "icon": "🖥️", "name": "Website design" },
        { "icon": "🗣️", "name": "Influencer marketing" },
        { "icon": "📱", "name": "Mobile App development" },
        { "icon": "👨‍🎓", "name": "Campus Ambassador" },
        { "icon": "📊", "name": "Research & Survey" },
        { "icon": "📑", "name": "Data Entry" },
        { "icon": "🎤", "name": "Voice over" },
        { "icon": "📝", "name": "Content Writing" },
        { "icon": "🎨", "name": "Graphics design" },
        { "icon": "💻", "name": "Testing" }
    ],
    trustedBy: {
        companies: [carDekho, enerzySolar, mobigic],
        partners: [MaskGroup],
    },
    featuredIn: [
        "Teens financial empowerment",
        "Learning with earning",
        "Prepaid card",
        "Freelance",
        "Experience with real companies",
        "Project-based jobs"
    ],
    funngroFeatures: {
        onSharkTank: "Funngro was featured on Shark Tank",
        mission: "Enable smart teenagers and smart companies to realize their full potentials",
        founders: {
            ceo: "Payal Jain",
            cgo: "Anik Jain"
        }
    },
    successStories: [
        {
            name: "Aanya Anand",
            role: "Social Media Marketing",
            testimonial: "Experience has helped me gain a lot of confidence. Best part is learning & earning together."
        },
        {
            name: "Shaurya Chatterjee",
            role: "Content Writing",
            testimonial: "Proud earning money via the projects. It's a huge motivation."
        },
        {
            name: "Apoorva Tyagi",
            role: "Social Media Marketing",
            testimonial: "Funngro is a powerful platform for all the teenagers out there to earn by applying their skills and new ideas. Happy to work with companies."
        },
        {
            name: "Praanjal Agarwal",
            roles: ["Social Media Marketing", "Content Writing"],
            testimonial: "Helped me to earn through my skills. Happy to work with companies."
        }
    ],
    blogPosts: [
        {
            title: "Unleashing Freelancing Success with Funngro: Essential Qualities and Powerful Tools",
            link: "Read More"
        },
        {
            title: "The Importance of Early Work Experience for Teens",
            link: "Read More"
        },
        {
            title: "Why teens should watch Shark Tank India?",
            link: "Read More"
        }
    ],
    companyInfo: {
        tagline: "Smart Talent for smart companies",
        valuePropositions: "Cost-effective, Timely delivery, Innovative ideas while you help the next generation",
        talentDescription: "Talented Teenagers for your company",
        callToAction: "Hire Teenlancer",
        popularCategories: [
            "Blogs",
            "Social Media",
            "Video Creation",
            "Sales"
        ]
    },
    services: {
        branding: {
            title: "Build your brand",
            price: "₹2000",
            description: "Get your logos, brochure designed professionally - 5 Samples",
            callToAction: "Start Now"
        },
        websiteCustomization: {
            title: "Customize your website",
            priceRange: "₹5000-₹15000",
            description: "Get a professional website designed to increase business growth.",
            callToAction: "Start Now"
        },
        socialMediaManagement: {
            title: "Reach more customers",
            price: "₹5000",
            description: "Get Teenlancers to manage your social media handles",
            callToAction: "Start Now"
        }
    },
    testimonials: [
        {
            name: "Darsh Golecha",
            company: "Monech",
            testimonial: "Happy customer as Teens work is excellent. It's cost effective with great quality. Have used their graphic designing, Social media, and Research Talent.",
            image: Darsh
        },
        {
            name: "Ravishankar Gopalan",
            company: "Execute Partners & Consultants LLP",
            testimonial: "Impressed by the article written by a Grade IX School student on how he has seen life transform around him with digital payments over the last ten years.",
            image: Ravishankar
        },
        {
            name: "Meetu",
            company: "Let's Evolve",
            testimonial: "Funngro services are excellent. They have provided blogs for our website and super impressed by the quality of work done by Teens and amazed to see their financial knowledge too.",
            image: test
        }
    ]
    ,
    whyWorkWithTeens: {
      title: "Why Work with Teens",
      description: "Teenagers are the smarter generations, more clued in to your customer mindset, not spoilt by years of experience hence being cost effective delivery of high quality of work.",
      workingWithTeamIllustration: [
          {
              title: "Innovation",
              description: "No longer worry about using the same old ideas. Get innovative thinking, processes and style of working. Helps companies grow rapidly with timely project delivery."
          },
          {
              title: "Cost Effective",
              description: "Get your work done significantly lower cost, save as much as 50% on cost."
          }
      ],
      callToAction: "* Help the next generation the way someone helped you",
      actionButton: "Start Now"
  }
,
  aboutInfo :{
    tagline: "It's Fun to Grow",
    mission: "Funngro is built by educators, tech enthusiasts, IIM alumni, finance experts, but most importantly by loving parents. We are thankful to those mentors who helped us in the early stages of our lives, and Funngro is our effort to give back to society. Funngro is a mission to enable teenagers to become financially empowered and grow up to be responsible citizens.",
    vision: "Enable smart teenagers and smart companies to realize their full potential.",
    founders: [
      {
        name: "Payal Jain",
        position: "CEO"
      },
      {
        name: "Anik Jain",
        position: "CGO"
      }
    ]
  }
  
};

export default funngroInfo;
