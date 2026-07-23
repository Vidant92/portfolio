export const projects = [
  {
    tag: "ENTRY 02.01",
    slug: "crowdsafe-nexus",
    name: "CrowdSafe Nexus",
    tagline: "AI-powered crowd monitoring platform",
    team: false,
    overview:
      "A real-time crowd monitoring system that uses computer vision to detect and count people in a live video feed, estimate crowd density across zones, and surface early risk signals before a space becomes unsafe.",
    features: [
      "Real-time crowd detection with YOLOv8 object detection",
      "Zone-wise crowd density analysis and heat-mapping",
      "Multi-level risk classification for live monitoring",
      "Streamlit dashboard wired to Firebase for live statistics"
    ],
    challenges:
      "Getting reliable detection at real-time frame rates while keeping density estimates stable across camera angles and crowd sizes required tuning the detection pipeline and smoothing the analytics layer rather than reacting to every single frame.",
    contribution:
      "Built solo, end to end — the YOLOv8 inference layer, the Firebase data layer, and the Streamlit dashboard used for live monitoring.",
    stack: ["Python", "YOLOv8", "OpenCV", "Streamlit", "Firebase"],
    github: "https://github.com/Vidant92/CROWD-SAFE",
    live: null,
    imagePath: "/images/projects/crowdsafe-nexus.png",
    imageNote: "Dashboard screenshot · 1600×1000 recommended"
  },
  {
    tag: "ENTRY 02.02",
    slug: "deep-packet-inspection-engine",
    name: "Deep Packet Inspection Engine",
    tagline: "Layer 7 traffic analysis engine in Java",
    team: false,
    overview:
      "A Java-based Deep Packet Inspection engine that reads raw PCAP traffic and identifies Layer 7 applications by extracting HTTP Host headers and TLS SNI fields, backed by a rule-based firewall.",
    features: [
      "Layer 7 application detection via HTTP Host & TLS SNI extraction",
      "Multi-threaded packet processing pipeline for throughput",
      "Rule-based firewall to block targeted applications",
      "Detailed traffic analytics and reporting"
    ],
    challenges:
      "Parsing raw packet data correctly across protocol edge cases while keeping the pipeline multi-threaded and non-blocking — the firewall rules had to act on classification results without stalling packet throughput.",
    contribution:
      "Built solo — packet parsing, the multi-threaded processing pipeline, classification logic, and the rule-based firewall layer.",
    stack: ["Java", "PCAP", "Multithreading", "Computer Networks", "Maven"],
    github: "https://github.com/Vidant92/Deep-Packet-Ins",
    live: null,
    imagePath: "/images/projects/deep-packet-inspection.png",
    imageNote: "Terminal / traffic-log screenshot · 1600×1000 recommended"
  },
  {
    tag: "ENTRY 02.03",
    slug: "medconnect",
    name: "MedConnect",
    tagline: "Medicine donation & hospital–NGO coordination platform",
    team: false,
    overview:
      "A full-stack platform connecting donors, hospitals, and NGOs for medicine donation, with secure role-based access and an AI-powered medical report analyzer to speed up verification.",
    features: [
      "JWT-based authentication with role-based access control",
      "AI medical report analyzer using OCR + Gemini AI",
      "Cloudinary-backed document and image uploads",
      "Razorpay payment integration for donations"
    ],
    challenges:
      "Coordinating three distinct user roles (donors, hospitals, NGOs) on a single auth system, while keeping the OCR + Gemini AI report analysis fast enough to feel usable in a live flow.",
    contribution:
      "Owned the full stack — role-based JWT auth, the OCR/Gemini AI report analyzer, Cloudinary integration, and the Razorpay payment flow.",
    stack: ["MERN", "JWT", "Gemini AI", "OCR", "Cloudinary", "Razorpay"],
    github: "https://github.com/Vidant92/MED-CONNECT",
    live: "https://medconnect-inky.vercel.app/",
    imagePath: "/images/projects/medconnect.png",
    imageNote: "Landing page screenshot · 1600×1000 recommended"
  },
  {
    tag: "ENTRY 02.04",
    slug: "truthlens",
    name: "TruthLens",
    tagline: "AI forensic analysis engine against misinformation",
    team: true,
    teamNote:
      "Built with a team at SRM Hackathon (Problem Statement 5 — AI Against Misinformation). The card below describes what the project does as a whole and what I specifically owned within the team.",
    overview:
      "An AI-powered forensic analysis and fact-checking engine built for SRM Hackathon's 'AI Against Misinformation' problem statement — detecting deepfakes, manipulated media, and misinformation in real time across text, images, audio, and video, with support for English, Hindi, and Tamil.",
    features: [
      "Multimodal analysis across text claims, URLs, images, and deepfake media",
      "Multilingual support — English, Hindi, and Tamil",
      "AI-powered fact-checking using forensic signals to verify forwarded messages and media authenticity",
      "Dashboard for viewing truth reports, credibility scores, and forensic analysis"
    ],
    challenges:
      "Scaling detection across three languages and four content modalities in a hackathon timeframe meant being deliberate about which forensic signals to prioritize, and designing the credibility-scoring pipeline to stay explainable rather than a black box.",
    contribution:
      "As part of the team, I focused on the detection/verification pipeline and integrating the multilingual support layer — team members split ownership across the forensic-analysis backend, the multilingual layer, and the dashboard UI.",
    stack: ["Python", "AI/ML", "NLP", "Deepfake Detection", "Multilingual NLP"],
    github: "https://github.com/Vidant92/TruthLens--SRM-HACKATHON-",
    live: null,
    imagePath: "/images/projects/truthlens.png",
    imageNote: "Dashboard / report screenshot · 1600×1000 recommended"
  },
  {
    tag: "ENTRY 02.05",
    slug: "ai-diet-planner",
    name: "AI Diet Planner",
    tagline: "Gemini-powered personalized diet & workout planner",
    team: false,
    overview:
      "A full-stack MERN application powered by Google's Gemini AI that generates personalized 7-day diet and workout plans based on a user's body metrics and health goals.",
    features: [
      "BMI calculator and BMR-based daily calorie calculator",
      "AI-generated 7-day diet plans via the Gemini API",
      "AI-generated workout routines paired with the diet plan",
      "Detailed per-meal calorie breakdown, saved diet history in MongoDB, and exportable plans"
    ],
    challenges:
      "Getting consistent, well-structured output from the Gemini API (calorie math that actually adds up, plans that respect the user's stated goals) required careful prompt design and validation before saving a plan to history.",
    contribution:
      "Built solo — the Node/Express API, MongoDB schema for diet history, the Gemini integration for both diet and workout generation, and the React/Vite frontend.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/Vidant92/Diet-planner-",
    live: null,
    imagePath: "/images/projects/ai-diet-planner.png",
    imageNote: "App screenshot (diet plan view) · 1600×1000 recommended"
  },
  {
    tag: "ENTRY 02.06",
    slug: "smart-parking-management-system",
    name: "Smart Parking Management System",
    tagline: "Java + JDBC parking lot management system",
    team: false,
    overview:
      "A complete parking lot management system with a Java backend and a web frontend, handling slot allocation, entry/exit tracking, and billing through a JDBC-backed relational database.",
    features: [
      "Slot allocation and real-time availability tracking",
      "Entry/exit logging with automated billing",
      "JDBC-backed relational database layer",
      "Web frontend for day-to-day parking-lot operations"
    ],
    challenges:
      "Keeping slot state consistent under concurrent entry/exit events, and designing a schema that made billing calculations straightforward rather than bolted on afterward.",
    contribution:
      "Built solo — the Java backend, the JDBC data-access layer, and the accompanying web frontend.",
    stack: ["Java", "JDBC", "SQL", "Web Frontend"],
    github: "https://github.com/Vidant92/java-jdbc",
    live: null,
    imagePath: "/images/projects/smart-parking.png",
    imageNote: "App screenshot · 1600×1000 recommended"
  }
];
