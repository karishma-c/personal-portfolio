import Head from 'next/head';
import styles from './../components/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>C.Karishma | Front-end Developer</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header className='headerSection'>
        <div className='logo'>
          <h2 className='name'>karishma</h2>
        </div>
        <div className='media-links'>
          <Link href="/" className="">
            <Image
              src="/images/github.svg" 
              height={24}
              width={24}
              alt="github"
            />
          </Link>
          <Link href="/" className="">
            <Image
              src="/images/linkedin.svg" 
              height={24}
              width={24}
              alt="linkedin"
            />
          </Link>
          <Link href="/" className="">
            <Image
              src="/images/twitter.svg" 
              height={24}
              width={24}
              alt="twitter"
            />
          </Link>
        </div>
      </header>
      <section className="welcome-section" id="about">
        <div className="introduction">
          <h1 className="role">Front-end Developer</h1>
          <p className="about">
            Front-end Developer with 2.5 years of experience designing and implementing user interfaces and reusable components based on requirements.
          </p>    
        </div>
      </section>
      <section className='experience-section'>
        <div >
          <Image
            src="/images/countries-info.png" 
            height={244}
            width={244}
            alt="countries-api-project"
          />
          </div>
      </section>
    </div>
  );
  
}

export default HomePage;