// projectsData.js
// Tip: Save your project screenshots in `src/assets/images/projects/` and import them here,
// OR save them in `public/projects/` and use direct paths like "/projects/your-screenshot.png"
import novamartImg from "../assets/images/projects/novamart.png";
import firstEcommerceWeb from "../assets/images/projects/firstEcommerceWeb.png";

export const projectsData = [
  {
    id: 1,
    title: "Ecommerce website",
    subtitle: "React Js",
    category: "Frontend web",
    badge: "Featured",
    description:
      "Built on ReactJs",
    features: [
      "Secure JWT-based authentication with strict access control for public and protected routes",

"End-to-end checkout flow including add-to-cart, cart progression, and secure order placement",

"Centralized and efficient real-time state management for cart operations using Redux Toolkit",

"Role-based admin controls featuring manual order review and confirmation workflows",

"Fully responsive, user-friendly interface designed for a seamless shopping experience across devices"
    ],
    tags: ["HTML", "CSS", "Javascript", "ReactJS", "Redux-toolkit"],
    image: firstEcommerceWeb,
    live: "https://firstecommerceweb.vercel.app/",
    github: "https://github.com/AzizullahCodes/Ecommerce-project.git"
  }
  // {
  //   id: 2,
  //   title: "TaskFlow Pro - Real-Time Collaborative Workspace",
  //   subtitle: "Agile Project & Kanban Suite",
  //   category: "MERN & WebSockets",
  //   badge: "Interactive",
  //   description:
  //     "A sleek agile project management and task orchestration platform inspired by modern team workspaces. Enables developers and teams to collaborate effortlessly with drag-and-drop Kanban boards, real-time live synchronization, team permission roles, task priority tags, and visual productivity analytics.",
  //   features: [
  //     "Smooth Drag-and-Drop Kanban boards (To Do, In Progress, Review, Done)",
  //     "Instant real-time team updates & notifications using WebSockets",
  //     "Workspace creation with team member invitations & role permissions",
  //     "Productivity dashboard with visual milestone charts and metrics",
  //     "Optimized for high responsiveness across mobile, tablet & desktop"
  //   ],
  //   tags: ["React 18", "Node.js", "Express", "MongoDB", "Socket.io", "React DnD", "Bootstrap 5"],
  //   image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  //   live: "https://taskflow-pro-workspace.vercel.app/",
  //   github: "https://github.com/AzizullahCodes/taskflow-pro"
  // }
];
