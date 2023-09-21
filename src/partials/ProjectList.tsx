import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Experience</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Parallel Systems"
        description="For the summer of 2023, I worked as a full stack software engineer intern at this early-stage startup in LA called Parallel Systems led by a group of brilliant engineers from SpaceX. The company's mission is to develop fully autonomous electric intermodal rail vehicles to convert part of the $700 billion U.S. trucking industry to rail. I helped start the first test pilot program of such novel rail technology in the U.S by developing a full stack web-based traffic authority platform that streamlines the process for managing track warrants and bulletins for all fleet vehicles. So far, Parallel has raised over 50 millions in funding and has started testing programs in the U.S and Australia."
        link="https://moveparallel.com/"
        img={{
          src: '/assets/images/parallel.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.CYAN}>Tailwind</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.EMERALD}>Redux</Tags>
            <Tags color={ColorTags.LIME}>Rust</Tags>
            <Tags color={ColorTags.TEAL}>gRPC</Tags>
            <Tags color={ColorTags.GRAY}>Node.js</Tags>
            <Tags color={ColorTags.INDIGO}>Actix</Tags>
            <Tags color={ColorTags.SKY}>PostgreSQL</Tags>
            <Tags color={ColorTags.ORANGE}>AWS</Tags>
          </>
        }
      />
      <Project
        name="Tesla, Inc"
        description="During the fall of 2022, I joined Tesla as a full stack software engineer intern. My team develops many critical in-house data management and simulation infrastructure used by over 300 vehicle engineers around the globe. Over the course of my internship, I was given a lot of responsibilities and worked on a variety of projects and helped teams to migrate their CyberTruck engineering & testing data to our new website, drastically simplifying their workflow and accelerating the rollout of CyberTruck and many other new Tesla vehicles. My team mainly supports applications for Craftsmanship, Dimensional, and Integration team who are foundational to all Tesla vehicle developments. For example, Craftsmanship team is in charge of all vehicle interior designs and physical human-vehicle interaction experience."
        link="https://www.tesla.com/"
        img={{ src: '/assets/images/Tesla.svg', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Redux</Tags>
            <Tags color={ColorTags.GREEN}>Django</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.RED}>Redis</Tags>
            <Tags color={ColorTags.SKY}>PostgreSQL</Tags>
          </>
        }
      />
      <Project
        name="Lucidum"
        description="For the summer of 2022. I interned at an early-stage startup called Lucidum. The company' SaaS platform helps organization assess risk and mitigate vulnerabilities by finding and correlating data from your security tech stack. I mainly worked on the report center feature, where our product displays essential analytic data from different data sources chosen by the customers such as Cloud, IT, Iot, and so on. This is a remote internship as the organization has engineering & product teams scattered across the U.S, Europe, and Asia. Lucidum is a fast growing startup with both small business and enterprise customers, and has raised over 15 millions in funding."
        link="https://lucidum.io/"
        img={{ src: '/assets/images/lucidum.jpeg', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.NEUTRAL}>Java</Tags>
            <Tags color={ColorTags.GREEN}>Spring Boot</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>FastAPI</Tags>
            <Tags color={ColorTags.RED}>Redis</Tags>
            <Tags color={ColorTags.GRAY}>MySQL</Tags>
            <Tags color={ColorTags.ORANGE}>AWS</Tags>
          </>
        }
      />
      <Project
        name="Lucidum"
        description="For the summer of 2021, I started my first software engineering internship ever at Lucidum. My position was software engineer Intern in test, and I was able to learn many modern testing skills and standards that are widely used in the industry. The company's engineering heritage includes Cisco, Okta, and Splunk, and so on, and it was quite an eye-opening work experience for me. I improved company's frontend and backend codebase test coverage, and introduced comprehensive unit tests, integration tests, and mutation tests for both UI and backend microservices. I also refactored codebase to improve maintainability and testability."
        link="https://lucidum.io/"
        img={{ src: '/assets/images/lucidum.jpeg', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Cypress</Tags>
            <Tags color={ColorTags.PURPLE}>React Test Library</Tags>
            <Tags color={ColorTags.GREEN}>Jest</Tags>
            <Tags color={ColorTags.SKY}>pytest</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.AMBER}>Bash</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
