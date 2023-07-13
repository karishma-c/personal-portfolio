import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../components/layout.module.css';
import utilStyles from './../styles/utils.module.css';

const HomePage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>C.Karishma | Front-end Developer</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header className={utilStyles.flexRow}>
        <div className='logo'>
          <h2 className={styles.name}>karishma</h2>
        </div>
        <div className={utilStyles.flexRow}>
          <Link className={utilStyles.mediaLinks} href="https://github.com/karishma-c" >
            <Image
              src="/images/github-icon.png" 
              height={24}
              width={24}
              alt="github"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://www.linkedin.com/in/karishma--c/" >
            <Image
              src="/images/linkedin-icon.png" 
              height={22}
              width={22}
              alt="linkedin"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://twitter.com/_karishc" >
            <Image
              src="/images/twitter-icon.png" 
              height={22}
              width={22}
              alt="twitter"
            />
          </Link>
        </div>
      </header>
      <section className={utilStyles.introSection} id="about">
        <div className="introduction">
          <h1 className={styles.role}>Front-end Developer</h1>
          <p className={styles.about}>
            Hi, I am Karishma from Salem. I have almost 3 years of experience in <b>Front-end Development.</b> I have passion for designing and implementing responsive user interfaces, reusable components, and web apps based on requirements.
          </p>    
          <p className={styles.resume}>Check out my <b className={styles.resumeLink}>Resume</b>.</p>
        </div>
      </section>
      <section className={utilStyles.introSection}>
        <div className='experience'>
          <h3 className={styles.heading}>Experience</h3>
          <p className={styles.about}>
            Maasika is Health-oriented start-up based in Bangalore. I have worked in Maasika till January 2022.
            Now, I am working in Mdplus which is also a part of Maasika.
          </p>
          <div className={utilStyles.flexRow}>
            <div className={styles.card}>
              <Link href="" className={styles.company}>Maasika</Link>
              <h5 className={styles.Role}>Frontend Developer</h5>
              <ul className={styles.workInfo}>
                <li className={styles.location}>Bangalore</li>
                <li className={styles.date}>December 2020</li>
              </ul>
            </div>
            <div className={styles.card}>
              <Link href="" className={styles.company}>Mdplus</Link>
              <h5 className={styles.Role}>Frontend Developer</h5>
              <ul className={styles.workInfo}>
                <li className={styles.location}>Bangalore</li>
                <li className={styles.date}>February 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
}

export default HomePage;