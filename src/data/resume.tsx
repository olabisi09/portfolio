import { Icons } from "@/components/icons";

export const DATA = {
  name: "Olabisi",
  initials: "OO",
  url: "https://olabisi.vercel.app",
  location: "Lagos, Nigeria",
  description:
    "Software Developer who loves to create impactful solutions for the web.",
  summary:
    "I love the thrill problem-solving gives. After I finished my [computer science degree](#education) in 2021, I have focused on using the tools at my disposal to build something that impacted people's lives positively. When I first started learning how to code, I didn't really have the real world in mind; I just thought it was cool. It wasn't until 2022 that I realized that I could put my skills and and all that I'd learned into an actual career that served people, businesses, governments, and pretty much the whole world. Now my focus is mostly on building enterprise applications.  \nOutside of work, I love listening to 20th century music and reading high fantasy books, especially the Lord of the Rings and all of J.R.R Tolkien's works.",
  avatarUrl: "/me.jpg",
  skills: ["Next.js", "React", "Vue", "Typescript", "Sass"],
  contact: {
    email: "olabisiolaoye09@gmail.com",
    social: {
      GitHub: {
        url: "https://www.github.com/olabisi09",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/olabisi-olaoye/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://www.x.com/olabisi_laoye",
        icon: Icons.x,
      },
    },
  },
  education: [
    {
      school: "Covenant University",
      href: "https://covenantuniversity.edu.ng/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/cu-logo.jpeg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Membership Portal",
      href: "https://members.cipmnigeria.org",
      dates: "Jan 2024 - August 2024",
      active: true,
      description:
        "I built and maintained a robust membership portal that streamlined key activities for HR professionals.",
      technologies: ["React", "TypeScript", "Sass", "Ant Design"],
      links: [
        {
          type: "Website",
          href: "https://members.cipmnigeria.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Read More",
          href: "/membership-portal",
          icon: <Icons.read className="size-3" />,
        },
      ],
      image: "/mockup-cipm.png",
      video: "",
    },
    {
      title: "Merchant Transaction Management App",
      href: "https://merchant.cyberpay.ng",
      dates: "Nov 2022 - Jan 2023",
      active: true,
      description:
        "This project was all about empowering businesses to manage their financial operations efficiently.",
      technologies: ["React", "TypeScript", "Sass", "Material UI"],
      links: [
        {
          type: "Website",
          href: "https://merchant.cyberpay.ng",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Read More",
          href: "/merchant-app",
          icon: <Icons.read className="size-3" />,
        },
      ],
      image: "/mockup-merchant.png",
      video: "",
    },
  ],
} as const;
