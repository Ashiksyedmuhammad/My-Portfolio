import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ashik",
  initials: "AS",
  url: "https://github.com/Ashiksyedmuhammad",
  location: "Kochi, Kerala, India",
  locationLink: "https://www.google.com/maps/place/kochi",
  description:
    "Passionate Full-Stack Developer specializing in the MERN stack. I love building scalable web applications and transforming complex problems into elegant solutions.",
  summary:
    "I'm a passionate Full-Stack Developer specializing in the MERN stack, with a strong focus on building performant, user-centric applications. I enjoy transforming complex problems into elegant solutions and continuously learning new technologies to stay at the forefront of web development. Currently working on scalable full-stack applications and exploring workflow automation with n8n, while also diving into cloud architecture and microservices.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "JWT Authentication",
    "Socket.io",
    "Firebase",
    "AWS",
    "Nginx",
    "Git",
    "GitHub Actions",
    "Razorpay",
    "Stripe",
    "PayPal",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ashiknlpy@gmail.com",
    tel: "+91-8281254536",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ashiksyedmuhammad",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ashiknlpy",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/ashiknlpy",
        icon: Icons.x,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/omLfiBLLHl/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ashiknlpy@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [],
  
  // GitHub Analytics
  githubStats: {
    username: "Ashiksyedmuhammad",
    stats: {
      totalCommits: "500+",
      totalRepos: "18",
      totalStars: "1",
      languages: ["JavaScript", "TypeScript", "React", "Node.js", "CSS", "HTML"]
    }
  },

  // LeetCode Profile
  leetcodeStats: {
    username: "omLfiBLLHl",
    stats: {
      totalSolved: "100+",
      easySolved: "30+",
      mediumSolved: "15+",
      hardSolved: "5+",
      acceptanceRate: "85%",
      ranking: "Top 50%"
    }
  },
  projects: [
    {
      title: "Chat App",
      href: "https://github.com/Ashiksyedmuhammad/chat-app",
      dates: "2024 - Present",
      active: true,
      description:
        "A real-time chat application built with React and Socket.io, featuring instant messaging, user authentication, and modern UI design for seamless communication. Includes features like message history, online status, and responsive design.",
      tags: [
        "React.js",
        "Socket.io",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "CSS3",
        "Real-time Communication",
      ],
      links: [
        {
          label: "Source",
          type: "Source",
          href: "https://github.com/Ashiksyedmuhammad/ChatApplication",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      features: ["Real-time messaging", "User authentication", "Message history", "Online status", "Responsive design"],
      status: "Completed"
    },
    {
      title: "WatchAura",
      href: "https://github.com/Ashiksyedmuhammad/WatchAura",
      dates: "2024 - Present",
      active: true,
      description:
        "A modern watch showcase application built with React and CSS, featuring responsive design and interactive components for displaying premium timepieces. Includes product filtering, detailed views, and smooth animations.",
      tags: [
        "React.js",
        "CSS3",
        "HTML5",
        "JavaScript",
        "Responsive Design",
      ],
      links: [
        {
          label: "Source",
          type: "Source",
          href: "https://github.com/Ashiksyedmuhammad/WatchAura",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      features: ["Product showcase", "Filter & search", "Responsive design", "Smooth animations", "Modern UI"],
      status: "Completed"
    },
    {
      title: "React User Management",
      href: "https://github.com/Ashiksyedmuhammad/React_User_Management",
      dates: "Sep 27, 2024 - Present",
      active: true,
      description:
        "A comprehensive user management system built with React and TypeScript, featuring user authentication, profile management, and administrative controls with modern UI components. Includes role-based access control and data validation.",
      tags: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Tailwind CSS",
        "User Management",
      ],
      links: [
        {
          label: "Source",
          type: "Source",
          href: "https://github.com/Ashiksyedmuhammad/React_User_Management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      features: ["User authentication", "Role-based access", "Profile management", "Admin dashboard", "Data validation"],
      status: "Completed"
    },
  ],
  hackathons: [],
} as const;
