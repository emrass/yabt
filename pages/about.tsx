import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>
      YABT is built by Enrico Mrass as a fun project to apply modern web
      technologies in a real-life project, and because he did not find a baby
      tracker application that fulfilled all his requirements on data privacy,
      functionality, and API integrations.
    </p>
    <p>
      This project is open source and maintained at{" "}
      <Link href="https://github.com/emrass/yabt">
        <a>https://github.com/emrass/yabt</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
