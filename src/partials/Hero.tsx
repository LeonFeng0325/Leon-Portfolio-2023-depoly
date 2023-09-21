import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello there, I'm <GradientText>Leon</GradientText> 👋
        </>
      }
      description={
        <div>
          Welcome to my personal website. My name is Leon Feng and I am
          currently an undergraduate student at University of California, Santa
          Barbara(UCSB) majoring in Computer Science, graduating at the end of
          2023.
          <br />
          <br />
          Personally, I have tremendous interests in web development and
          software system design in general. Additionally, I have over one year
          of rigorous industry internship experience in full stack software
          engineering at both startup and corporate environments. Outside work,
          I am an avid hiker, ping pong player, and occasionally cycle with my
          friends. <br />
          <br /> Some interesting facts about me: I am a big foodie, and rowed
          for UCSB for 3 years until my back gives out😔. What I am most proud
          of myself is that I have migrated database a couple times during my
          past internships and have not deleted a prod database yet😮‍💨.
        </div>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/cap-face.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/leon-feng-32216319a"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
