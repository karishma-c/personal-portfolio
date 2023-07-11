import { useState } from 'react';

// function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }

const HomePage = () => {

  return (
    <div>
      <section class="welcome-section" id="about">
        <div class="introduction">
            <h1 class="role">Front-end Developer</h1>
            <p class="about">
              Front-end Developer with 2.5 years of experience designing and implementing user interfaces and reusable components based on requirements.
            </p>    
        </div>
      </section>
    </div>
  );
  
}

export default HomePage;