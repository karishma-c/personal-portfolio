import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './../components/layout.module.css';
import utilStyles from './../styles/utils.module.css';
import { PdfIcon } from './../utils/SvgIcon';
import { 
  areaOfInterest,
  Projects,
  skills,
  socialMediaLinks,
} from './../utils/portfolioData';
import { Card } from './../components/Card/Card';
import { SocialIcon } from './../components/SocialIcon/SocialIcon';
import { Chip } from './../components/Chip/Chip';

const HomePage = () => {

  return (
    <div className="bg-white max-w-3xl mx-auto my-0 text-black" >
      <Head>
        <title >C.Karishma | Front-end Developer</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      
      <main className="flex flex-col w-full max-w-4xl px-4 lg:w-auto lg:px-4 sm:px-2 justify-center item-center mx-auto">
        <section className="my-[74px]">
          <h1 className="text-3xl font-semibold text-custom_black-800	leading-[36px]">
            Karishma C
          </h1>
          <div className="flex items-center flex-wrap mt-3">
            <div className="text-xl text-textPrimary mr-8">
              Frontend Developer
            </div>
            <Link href='/resume/Karishma_C_Resume.pdf'  target="_blank"
                className="p-2 rounded-sm flex text-tiny font-medium text-blue-500 cursor-pointer hover:bg-blue-100">
              
              <PdfIcon className={"mr-1"} />
                View Resume
            </Link>
          </div>
          <div className="flex my-6 flex-wrap">
            {areaOfInterest.map((interest, index) => {
              return <Chip key={index}>{interest}</Chip>;
            })}
          </div>
          <div className="flex flex-wrap">
            {socialMediaLinks.map((socialMediaLink, index) => {
              return (
                <SocialIcon key={index} data={socialMediaLink}></SocialIcon>
              );
            })}
          </div>
        </section>
        <section className="mb-[54px] w-full">
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="text-tiny my-[14px] text-textPrimary">
            Hi, I am Karishma. I have worked in <strong>Maasika and Md+</strong> as
            Frontend Developer for 2 years and 7 months. I am actively exploring career opportunities in Frontend Development.</p>
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">Skills</h3>
            <div className="flex flex-wrap my-[14px]">
              {skills.map((skill, index) => {
                return (
                  <Chip key={index}>
                    <div className="mr-[6px]">{skill.icon}</div>
                    {skill.tech}
                  </Chip>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mb-[74px]">
          <h2 className="text-lg font-semibold">Side Project</h2>
            <div className="mt-[16px]">
              {Projects.map((project, index) => {
                return <Card key={index} projectData={project}></Card>;
              })}
            </div>
        </section>
      </main>
    </div>
  );
  
}

export default HomePage;