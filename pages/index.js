// Components
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import Link from "next/link";
// Utils
import { getSortedPostsData } from '../lib/posts';
// Styles
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
              <br/>
              <h2 className={utilStyles.headingLg}>Intro</h2>
            <p>Hello, my name is Oscar Herrada. I'm a student learning Computer Science, and Web Development.</p>
            <br/>
            <p>
                This is a simple blogsite - built using this {' '}
                <a href="https://nextjs.org/learn">Next.js </a>
                tutorial.
            </p>
          </section>
          <br/>
          <br/>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>{title}</Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>
      </Layout>
  );
}