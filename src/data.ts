import {
  DescriptionProjectsProps,
  IDescriptionHome,
} from "./interfaces/interfaces";

//? Si quiero agregar nuevos proyectos, modificar SOLO descriptionsProjects
//? El 'id' debe de coincidir con el nombre de la imagen

// Projectos que se muestran en /projects
export const descriptionsProjects: DescriptionProjectsProps[] = [
  {
    id: "audiophile",
    title: "Audiophile Ecommerce",
    desc: "Premium audio e-commerce platform built as an advanced Frontend Mentor challenge.",
    url: "https://audiophile-ecommerce-joacoconut.vercel.app",
    tags: ["HTML", "React", "SASS", "TypeScript"],
  },
  /* {
    id: "infohome",
    title: "Info Home",
    desc: "Página de compra y renta de casas con consumo de API y filtrado.",
    url: "https://info-home-joacoconut.vercel.app/",
    tags: ["HTML", "React", "NextJS", "API"],
  }, */
  {
    id: "gym",
    title: "Gym Project",
    desc: "Exercise website that displays videos and information by consuming an API.",
    url: "https://gym-project-joacoconut.vercel.app/",
    tags: ["HTML", "React", "API"],
  },
  {
    id: "cars",
    title: "Vega Cars",
    desc: "Luxury car rental platform combining elegant design with advanced functionalities to deliver a seamless and modern user experience.",
    url: "https://vega-cars.vercel.app/",
    tags: ["HTML", "React", "NextJS", "TypeScript", "TailwindCSS"],
  },
  /* {
    id: "control-clientes",
    title: "Control de Clientes",
    desc: "Página de control de clientes con múltiples funcionalidades usando Angular y una base de datos creada en Firebase",
    url: "https://control-clientes-joacoconut.vercel.app",
    tags: ["HTML", "Angular", "Bootstrap", "Firebase"],
  }, */
];

// Projectos que se muestran en la página principal
export const descriptionsHome: IDescriptionHome[] = [
  {
    id: "audiophile",
    title: "Audiophile Ecommerce",
    desc: "Premium audio e-commerce platform built as an advanced Frontend Mentor challenge.",
    url: "https://audiophile-ecommerce-joacoconut.vercel.app",
    github: "https://github.com/joacoconut/Audiophile-Ecommerce",
    tags: ["HTML", "React", "SASS", "TypeScript"],
  },
 /*  {
    id: "infohome",
    title: "Info Home",
    desc: "Página de compra y renta de casas con consumo de API y filtrado.",
    url: "https://info-home-joacoconut.vercel.app/",
    github: "https://github.com/joacoconut/InfoHome",
    tags: ["HTML", "React", "NextJS", "API"],
  }, */
  {
    id: "gym",
    title: "Gym Project",
    desc: "Exercise website that displays videos and information by consuming an API.",
    url: "https://gym-project-joacoconut.vercel.app/",
    github: "https://github.com/joacoconut/gym-project",
    tags: ["HTML", "React", "API"],
  },
  {
    id: "cars",
    title: "Vega Cars",
    desc: "Luxury car rental platform combining elegant design with advanced functionalities to deliver a seamless and modern user experience.",
    url: "https://vega-cars.vercel.app/",
    github: "https://github.com/joacoconut/vega-cars",
    tags: ["HTML", "React", "NextJS", "TypeScript", "TailwindCSS"],
  },
  /* {
    id: "control-clientes",
    title: "Control de Clientes",
    desc: "Página de control de clientes con múltiples funcionalidades usando Angular y una base de datos creada en Firebase",
    url: "https://control-clientes-joacoconut.vercel.app",
    github: "https://github.com/joacoconut/control-clientes",
    tags: ["HTML", "Angular", "Bootstrap", "Firebase"],
  }, */
];
