import Head from 'next/head';
import Layout from "./../components/layout";
import Image from 'next/image';

const HomePage = () => {

  return (
    <Layout>
      <Head>
        <title>C Karishma</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <section className="welcome-section" id="about">
        <div className="introduction">
          <h1 className="role">Front-end Developer</h1>
          <p className="about">
            Front-end Developer with 2.5 years of experience designing and implementing user interfaces and reusable components based on requirements.
          </p>    
        </div>
        <div className='experience-section'>
        <Image
          src="/images/countries-info.png" 
          height={244}
          width={244}
          alt="Your Name"
        />
        </div>
      </section>
    </Layout>
  );
  
}

export default HomePage;