import { motion } from "framer-motion";
import styles from "../../styles/about/about.module.css";
import Personal from "./Personal";

const transitionConfig = {
  type: "spring",
  duration: 1,
  bounce: 0.65,
};

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};

const About = () => {
  return (
    <section className={styles.container}>
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionConfig}
        viewport={viewportConfig}
        className={styles.title}
      >
        To know me better
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionConfig}
        viewport={viewportConfig}
        className={styles.subtitle}
      >
        I'm Joaquín Vega, a Frontend Developer. <br />
        <br />
        I'm passionate about building modern, functional, and engaging user
        interfaces. I'm currently looking for my first professional opportunity
        to grow as a developer, contribute my skills, and take on new
        challenges. <br /> <br /> I focus on building high-quality projects,
        paying attention to detail, and turning ideas into clear, intuitive, and
        accessible web experiences. I enjoy learning new technologies and
        continuously improving my skills as a developer.
      </motion.h2>

      <Personal />
    </section>
  );
};

export default About;
