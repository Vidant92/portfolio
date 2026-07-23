import {
  SiLeetcode,
  SiGithub,
  SiGeeksforgeeks,
  SiCodeforces,
  SiX
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export const profile = {
  name: "Vidant Bhardwaj",
  initials: "VB",
  status: "Final Year B.Tech CS Student · Open to SDE / Full-Stack Internships",
  headline: "Final Year B.Tech Computer Science Student",
  heroIntro:
    "I enjoy solving Data Structures & Algorithms problems, building full-stack applications, participating in hackathons, and continuously learning modern technologies. This site is basically the log of that — six builds, a running contest history, and whatever I'm picking up next.",
  aboutQuote:
    "I like problems that are annoying enough to be interesting.",
  about: [
    "I'm a final-year B.Tech Computer Science student at IMS Engineering College. Most of my time splits between two things: competitive programming, and building full projects end-to-end rather than half-finished demos.",
    "Backend is where I'm most at home — APIs, databases, the parts of a system that have to hold up when things get messy. Alongside that I've been pulled into AI, using it for real problems (crowd monitoring, document analysis, misinformation detection) instead of toy examples.",
    "Hackathons are where a lot of this gets tested under pressure — a Top 9 finish at HRIT, a national final at SRM, a team build on deepfake detection at another. Each one taught me something the coursework didn't.",
    "Outside of that: 500+ DSA problems, a rated LeetCode profile, and a habit of picking apart a hard problem before writing a single line of code."
  ],
  currentlyLearning: "System Design & distributed systems fundamentals",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "bhardwajvidant39@gmail.com",
  phone: "+91 7703866734",
  highlights: [
    { value: "500+", label: "DSA problems solved", caption: "across LeetCode & GfG" },
    { value: "1548", label: "LeetCode rating", caption: "Weekly Contest 402, rank 4939" },
    { value: "2", label: "Hackathon finals", caption: "HRIT · SRM national round" },
    { value: "8.45", label: "CGPA", caption: "B.Tech CSE, IMS Engineering College" }
  ]
};

export const milestones = {
  achievements: [
    {
      title: "500+ DSA Problems Solved",
      org: "LeetCode & GeeksforGeeks",
      date: "Ongoing"
    },
    {
      title: "1548 Rated · Weekly Contest Rank 4939",
      org: "LeetCode Weekly Contest 402",
      date: "2026"
    },
    {
      title: "Top 9 Finalist",
      org: "HRIT College Hackathon",
      date: "2025"
    },
    {
      title: "National Hackathon Finalist",
      org: "SRM Institute of Science & Technology, Delhi-NCR",
      date: "2025"
    },
    {
      title: "Rank 287 / 10,590+ participants",
      org: "CodeQuezt Coding Challenge · Naukri Campus",
      date: "2025"
    }
  ],
  education: [
    {
      institution: "IMS Engineering College",
      degree: "B.Tech, Computer Science & Engineering",
      duration: "2023 — 2027",
      grade: "CGPA: 8.45 / 10"
    },
    {
      institution: "Sainik School Sujanpur Tira",
      degree: "Class XII",
      duration: "2023",
      grade: "Grade A"
    },
    {
      institution: "Sainik School Sujanpur Tira",
      degree: "Class X",
      duration: "2021",
      grade: "Grade A"
    }
  ]
};

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vidant-bhardwaj-b64970380/", icon: FaLinkedin },
  { name: "LeetCode", href: "https://leetcode.com/u/vidant/", icon: SiLeetcode },
  { name: "GitHub", href: "https://github.com/Vidant92", icon: SiGithub },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/vidant39?tab=activity", icon: SiGeeksforgeeks },
  { name: "Codeforces", href: "https://codeforces.com/profile/bhardwajvidant39", icon: SiCodeforces },
  { name: "Twitter", href: "https://x.com/vidant92", icon: SiX }
];

export const contactMethods = [
  { name: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { name: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Coding", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" }
];
