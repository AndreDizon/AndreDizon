import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
 <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Christian Andre R. Dizon. I'm an aspiring web developer with a passion for technology and a love for innovation. In my free time, I enjoy playing video games, watching or streaming movies, and listening to a wide range of music, but I like alternative rnb the most. My favorite food is adobo, a classic Filipino dish.
        </p>
        <p>
          In five years, I see myself as a proficient full-stack developer, creating impactful applications and contributing to innovative projects. I hope to have gained significant experience in the tech industry and to be in a position where I can mentor others.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
  );
}
