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
      <header className={utilStyles.flexRow} >
        <div className='logo'>
          <h2 className={styles.name}>karishma</h2>
        </div>
        <div className={utilStyles.flexRow}>
          <Link className={utilStyles.mediaLinks} href="https://github.com/karishma-c" >
            <Image
              src="/images/gitHub.png" 
              height={24}
              width={24}
              alt="github"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://www.linkedin.com/in/karishma--c/" >
            <Image
              src="/images/linkedin.png" 
              height={24}
              width={24}
              alt="linkedin"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://twitter.com/_karishc" >
            <Image
              src="/images/twitter.png" 
              height={24}
              width={24}
              alt="twitter"
            />
          </Link>
        </div>
      </header>
      <section id={utilStyles.borderBottom}  className={utilStyles.introSection} >
        <div className="introduction">
          <h1 className={styles.role}>Front-end Developer</h1>
          <p className={styles.about}>
            Hi, I am Karishma from Salem. I have almost 3 years of experience in <span>Front-end Development.</span> I have passion for designing and implementing responsive user interfaces, reusable components, and web apps based on requirements.
          </p>    
          <p className={styles.resume}>Check out my <Link href="" className={utilStyles.resumeLink}>Resume</Link>.</p>
        </div>
      </section>
      <section className={utilStyles.introSection}>
        <div className='experience'>
          <h3 className={styles.heading}>Experience</h3>
          <p className={styles.about}>
            Maasika is Health-oriented start-up based in Bangalore. I have worked in Maasika till January 2022.
            Now, I am working in Mdplus which is a product of Maasika.
          </p>
          <div className={utilStyles.flexRow}>
            <div className={styles.card}>
              <Link href="https://maasika.in/" className={styles.company}>Maasika</Link>
              <h5 className={styles.Role}>Frontend Developer</h5>
              <ul className={styles.workInfo}>
                <li className={styles.location}>Bangalore</li>
                <li className={styles.date}>December 2020</li>
              </ul>
            </div>
            <div className={styles.card}>
              <Link href="https://mdplusin.wixsite.com/website" className={styles.company}>Mdplus</Link>
              <h5 className={styles.Role}>Frontend Developer</h5>
              <ul className={styles.workInfo}>
                <li className={styles.location}>Bangalore</li>
                <li className={styles.date}>February 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={utilStyles.introSection}>
        <h3 className={styles.heading}>Projects</h3>
        <div className={utilStyles.flexRow}>
          <div className={styles.projectCard}>
            <div className="projectImage">
              <Image
                src="/images/countries-info.png"
                width={300}
                height={200}
                alt="countries-info-project"
              />
            </div>
            <div className="projectCardContent">
              <h5 className={styles.cardTitle}>COUNTRIES DETAILS PAGE</h5>
              <ul className={styles.ulStyles}>
                <li className={styles.liStyles}>REACT JS</li>
                <li className={styles.liStyles}>JAVASCRIPT</li>
                <li className={styles.liStyles}>SASS</li>
              </ul> 
              <div className={styles.projectLinks}>
                <Link href="" className={styles.projectLink}>VIEW PROJECT</Link>
                <Link href="" className={styles.codeLink}>VIEW CODE</Link>
              </div>
            </div>
          </div>  
          <div className={styles.projectCard}>
            <div className="projectImage">
              <Image
                src="/images/hotstar-card-clone.png"
                width={300}
                height={200}
                alt="hotstar card clone"
              />
            </div>
            <div className="projectCardContent">
              <h5 className={styles.cardTitle}>HOTSTAR CARD CLONE</h5>
              <ul className={styles.ulStyles}>
                <li className={styles.liStyles}>SASS</li>
                <li className={styles.liStyles}>HTML</li>
              </ul> 
              <div className={styles.projectLinks}>
                <Link href="" className={styles.projectLink}>VIEW PROJECT</Link>
                <Link href="" className={styles.codeLink}>VIEW CODE</Link>
              </div>
            </div>
          </div>    
        </div>
      </section>
      <section className={utilStyles.introSection}>
        <div className={styles.skillSection}>
          <h3 className={styles.heading}>Skills</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skills}>REACT JS</li>
            <li className={styles.skills}>JAVASCRIPT</li>
            <li className={styles.skills}>NEXT JS</li>
            <li className={styles.skills}>SASS</li>
            <li className={styles.skills}>JQUERY</li>
            <li className={styles.skills}>BOOTSTRAP</li>
            <li className={styles.skills}>CSS</li>
            <li className={styles.skills}>HTML</li>
          </ul>
        </div>
        <div className='tools'>
          <h3 className={styles.heading}>Tools</h3>
          <ul className={styles.toolsList}>
            <li className={styles.tools}>NPM</li>
            <li className={styles.tools}>FIGMA</li>
            <li className={styles.tools}>GIT</li>
            <li className={styles.tools}>CANVA</li>
            <li className={styles.tools}>JIRA</li>
            <li className={styles.tools}>NOTION</li>
          </ul>
        </div>
      </section>
      <section id={utilStyles.borderBottom} className={utilStyles.introSection}>
        <div className={styles.contact}>
          <h2 className={styles.dropMail}>
            I ‘m available to join a team
          </h2>
          <p className={styles.mailId}>Drop a mail to <Link className={utilStyles.mailLink} href="mailto: ckarishma.dev@gmail.com">ckarishma.dev@gmail.com</Link>  </p>
        </div>
      </section>
      <footer className={utilStyles.flexRow} >
        <div className='logo'>
          <h2 className={styles.name}>karishma</h2>
        </div>
        <div className={utilStyles.flexRow}>
          <Link className={utilStyles.mediaLinks} href="https://github.com/karishma-c" >
            <Image
              src="/images/gitHub.png" 
              height={24}
              width={24}
              alt="github"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://www.linkedin.com/in/karishma--c/" >
            <Image
              src="/images/linkedin.png" 
              height={24}
              width={24}
              alt="linkedin"
            />
          </Link>
          <Link className={utilStyles.mediaLinks} href="https://twitter.com/_karishc" >
            <Image
              src="/images/twitter.png" 
              height={24}
              width={24}
              alt="twitter"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
  
}

export default HomePage;