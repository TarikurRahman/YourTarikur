// Skill icons (from public/assets/skills/)
const fusion360Icon = "/assets/skills/fusion360.png";
const pythonIcon = "/assets/skills/python.png";
const arduinoIcon = "/assets/skills/arduino.png";
const esp32Icon = "/assets/skills/esp32.png";
const raspberrypi = "/assets/skills/raspberrypi.png";
const robotIcon = "/assets/skills/robotics.png";
const kicadIcon = "/assets/skills/kicad.png";
const proteusIcon = "/assets/skills/proteus.png";
const tinkercadIcon = "/assets/skills/tinkercad.png";
const javascriptIcon = "/assets/skills/node.png";
const typescriptIcon = "/assets/skills/react.png";
const gitIcon = "/assets/skills/git.png";
const githubIcon = "/assets/skills/github.png";
const latexIcon = "/assets/skills/framermotion.png";
const matlabIcon = "/assets/skills/matlab.png";
const d71Icon = "/assets/skills/d71.png";
const robohaatbdIcon = "/assets/skills/robohaat.png";

// Award logos (from public/assets/awards/)
const WiceLogo = "/assets/awards/WiceLogo.png";
const NMSTLogo = "/assets/awards/NMSTLogo.png";
const NSFLogo = "/assets/awards/NSFLogo.png";
const BSALogo = "/assets/awards/BSALogo.png";
const GOBBLogo = "/assets/awards/GOBBLogo.png";
const GOBLogo = "/assets/awards/GOBLogo.png";

// Project images (from public/assets/projects/)
const DEMON71 = "/assets/projects/DEMON71.png";
const DEMON712 = "/assets/projects/DEMON712.png";
const ROBOHAATBD = "/assets/projects/ROBOHAATBD.jpg";
const ROBOHAATBD2 = "/assets/projects/ROBOHAATBD2.jpg";
const UBC = "/assets/projects/UBC.jpg";
const UBC2 = "/assets/projects/UBC2.jpg";
const UBCB = "/assets/projects/UBCB.jpg";
const UBCB2 = "/assets/projects/UBCB2.jpg";

export const HERO_CONTENT = `I am a multidisciplinary inventor and tech researcher driven by the passion to turn abstract imagination into physical reality. From developing autonomous robotic platforms and training custom AI surveillance models to engineering high-performance web applications, I create systems that bridge the gap between intelligent hardware and software. Proficient across C++, Python, and full-stack web architectures, I don't just write code—I build connected solutions with absolute precision. Let's build something extraordinary together.`;

export const SITE_DESCRIPTION =
  "Tarikur Rahman is a Bangladeshi Robotics Inventor, System Architect, and Tech Researcher specializing in autonomous defense systems, tactical rovers (PHANTOM-X), industrial firefighting robotics (PHOENIX-F1), and embedded IoT ecosystems.";

export const SKILLS = [
  {
    title: "Hardware & Robotics",
    subtitle:
      "I specialize in prototyping autonomous robots, defense rovers, and IoT solutions using ESP32, Arduino, and comprehensive sensor integration to solve real-world problems.",
    icons: [
      { title: "Arduino", icon: arduinoIcon },
      { title: "ESP32", icon: esp32Icon },
      { title: "Raspberry Pi", icon: raspberrypi },
      { title: "Robotics", icon: robotIcon },
    ],
  },
  {
    title: "PCB & 3D Design",
    subtitle:
      "Experienced in end-to-end hardware development, from designing custom PCB layouts in KiCad to modeling 3D mechanical enclosures in Fusion 360 and simulating circuits in Proteus.",
    icons: [
      { title: "KiCad", icon: kicadIcon },
      { title: "Fusion 360", icon: fusion360Icon },
      { title: "Proteus", icon: proteusIcon },
      { title: "Tinkercad", icon: tinkercadIcon },
    ],
  },
  {
    title: "Software & Web Control",
    subtitle:
      "I build responsive web controls and dashboards using JavaScript, TypeScript, HTML/CSS, paired with Python for logic automation and Git/GitHub for version control.",
    icons: [
      { title: "JavaScript", icon: javascriptIcon },
      { title: "TypeScript", icon: typescriptIcon },
      { title: "Python", icon: pythonIcon },
      { title: "Git", icon: gitIcon },
      { title: "GitHub", icon: githubIcon },
    ],
  },
  {
    title: "Research & Leadership",
    subtitle:
      "A proactive leader and tech researcher, focused on writing technical papers with LaTeX, data visualization using MATLAB, and managing engineering projects at Robo Haat BD and Team DEMON71.",
    icons: [
      { title: "LaTeX", icon: latexIcon },
      { title: "MATLAB", icon: matlabIcon },
      { title: "DEMON71", icon: d71Icon },
      { title: "ROBO Haat BD", icon: robohaatbdIcon },
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "April 2026 - Present",
    title: "System Architect",
    subtitle: "Team DEMON71",
    description: `- System Architecture: Engineered the core computational framework and hardware-software integration.\n
- Tactical AI & Vision: Developed YOLO (YOLOv12) algorithms for real-time target tracking and intelligence.\n
- Remote Command: Built secure cross-network remote control protocols via Raspberry Pi.\n
- Web Deployment: Designed and coded the entire interactive dark-tactical web platform.
`,
    technologies: ["C++", "ROS2", "Python", "React", "Tailwind", "Git"],
    image: [DEMON71, DEMON712],
  },
  {
    year: "Dec 2025 - Present",
    title: "Founder",
    subtitle: "Robo Haat BD",
    description: `- Supply various components (Raspberry Pi, Motor Drivers, Arduino, ESP, Multiple Sensors) to help students learn basic to advanced robotics.\n
- Our mission is to make robotics affordable and accessible, inspiring the next generation to get involved in tech.`,
    technologies: ["IoT", "Robotics", "Microcontrollers", "Machine Vision"],
    image: [ROBOHAATBD, ROBOHAATBD2],
  },
  {
    year: "Oct 2025 - Present",
    title: "Club Secretary",
    subtitle: "Udvaboni Biggan Club Bahubal",
    description: `- Conducted 3+ workshops and seminars on Robotics, IoT, Digital Fabrication, and Project Management, impacting over 250+ students.\n
- Mentored students in design thinking and fabrication, guiding them in 3D printing, PCB design, and IoT applications.\n
- Planning and organizing upcoming workshops to further cultivate hands-on engineering skills.
`,
    technologies: [
      "Robotics",
      "IoT",
      "3D Printing",
      "Laser Cutting",
      "Fusion 360",
    ],
    image: [UBCB, UBCB2],
  },
  {
    year: "Feb 2023 - Present",
    title: "Research Editor",
    subtitle: "Udvaboni Biggan Club",
    description: `- Udvaboni Biggan Club is the central science club in Habiganj district, overseeing sub-branches in local upazilas and educational institutions.\n
- Worked to spread an innovation culture in remote regions by organizing annual seminars, workshops, and competitions.\n
- Edited research content and provided guidance on students' innovative projects.
`,
    technologies: ["Research", "Project Management", "Technical Writing", "Mentorship"],
    image: [UBC, UBC2],
  },
];

export const AWARDS: Record<
  string,
  Array<{
    year: string;
    position: string;
    event: string;
    description: string;
    link: string;
    logo?: string;
    logoDark?: string;
    logoSecondary?: string;
    logos?: string[];
  }>
> = {
  National: [
    {
      year: "2026",
      position: "Gold Medalist",
      event: "8th World Invention Competition and Exhibition (WICE) 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we earned the Gold Medal at the 8th World Invention Competition and Exhibition (WICE) 2026 with our DEMON71 second-generation defense rover. We competed in the IoT & Robotics segment under the Project Display category at Northern University Bangladesh on 9 May 2026. The competition was organized by Dreams of Bangladesh and the Indonesian Young Scientist Association (IYSA).`,
      link: "#",
      logo: WiceLogo,
    },
    {
      year: "2026",
      position: "Special 5th Place",
      event: "47th National Science & Technology Week 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved Special 5th Place at the 47th National Science & Technology Week 2026 National Science Fair with our DEMON71 second-generation defense rover. We competed at the National Science & Technology Complex, Agargaon, Dhaka from 14–16 June 2026. The event was organized by the National Museum of Science and Technology and the Ministry of Science and Technology, Bangladesh.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
    },
    {
      year: "2025",
      position: "Finalist",
      event: "National Science Fest 2025",
      description: `As a member of Udvaboni Biggan Club, Bahubal, we participated in the National Science Fest 2025 with our developed Autonomous Home & Fire Fighting Robot. Our project was selected among the Top 10 finalists in the competition, which took place at the Bangladesh Shishu Academy, Dhaka on 11 October 2025. The event was organized by Phulkuri Ashar in collaboration with the Bangladesh Shishu Academy.`,
      link: "#",
      logo: NSFLogo,
    },
  ],
  "Division,District,Upazila": [
    {
      year: "2026",
      position: "1st Place (Divisional Level)",
      event: "47th National Science & Technology Fair 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Sylhet Divisional Level of the 47th National Science & Technology Fair 2026 with our DEMON71 second-generation defense rover. We competed at the Mohammad Ali Gymnasium, Rikabibazar, Sylhet from 15–17 May 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
    },
    {
      year: "2026",
      position: "1st Place (District Level)",
      event: "47th National Science & Technology Fair 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Habiganj District Level of the 47th National Science & Technology Fair 2026 with our DEMON71 second-generation defense rover. We competed at the Zilla Parishad Auditorium, Habiganj from 18–20 April 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
    },
    {
      year: "2026",
      position: "1st Place (Upazila Level)",
      event: "47th National Science & Technology Fair 2026",
      description: `As Team DEMON71 from Alif Subhan Chowdhury Government College, we achieved 1st Place at the Bahubal Upazila Level of the 47th National Science & Technology Fair 2026 with our DEMON71 second-generation defense rover. We competed at the Upazila Parishad Auditorium, Bahubal on 15 April 2026.`,
      link: "#",
      logos: [NMSTLogo, GOBLogo],
    },
    {
      year: "2022",
      position: "1st Place (Upazila Level)",
      event: "National Children's Award Competition 2022",
      description: `Awarded 1st Place in the National Children's Award Competition 2022 (Upazila Level) in the Science Project category on 11 July 2023 at Bahubal, Habiganj, Bangladesh. The competition was organized by the Bangladesh Shishu Academy, Government of the People's Republic of Bangladesh.`,
      link: "#",
      logos: [BSALogo, GOBBLogo],
    },
    {
      year: "2022",
      position: "2nd Place (District Level)",
      event: "National Children's Award Competition 2022",
      description: `Awarded 2nd Place in the National Children's Award Competition 2022 (District Level) in the Science Project category on 16 July 2023 at Habiganj, Bangladesh. The competition was organized by the Bangladesh Shishu Academy, Habiganj, under the Bangladesh Shishu Academy, Government of the People's Republic of Bangladesh.`,
      link: "#",
      logos: [BSALogo, GOBBLogo],
    },
  ],
};

export const CONTACT = {
  address: "Sylhet, Bangladesh",
  email: "tarikurrahman2008@gmail.com",
  linkedin: "https://www.linkedin.com/in/tarikurrahmanbd/",
  scholar: "https://scholar.google.com/citations?user=YOUR_ID", // এখানে আপনার আসল Google Scholar ID বসাবেন
  facebook: "https://www.facebook.com/tarikurrahman08/",
  instagram: "https://www.instagram.com/tarikurrahman08/",
  tiktok: "https://www.tiktok.com/@tarikurrahman.bd/",
  github: "https://github.com/tarikurrahmanbd",
};