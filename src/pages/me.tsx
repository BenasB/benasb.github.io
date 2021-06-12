import MeHeader from 'components/meHeader/meHeader';
import MeTextSection from 'components/meTextSection/meTextSection';

const Me: React.FC = () => {
  return (
    <>
      <MeHeader />
      <MeTextSection title={'Who am I?'}>
        <p>
          I&apos;m a young developer with a passion for computer science,
          software, hardware and technology in general.
        </p>
        <p>
          I got into this field when I was in school year 5 or 6 after setting
          myself a goal that I would learn to create video games. It&apos;s been
          a wild ride and initially I didn&apos;t realize what I was getting
          into. However, I got completely carried away by the massive amount of
          knowledge there was to gain and decided that I find this extremely
          interesting and I should spend my time trying to learn as much as I
          can.
        </p>
        <p>
          Since then, I have worked with different types of programming
          languages (C#, C/C++, JS), frameworks (ASP.NET Core, SFML, MonoGame,
          WPF, React) and applied my skills in practice whilst developing
          numerous web, desktop and mobile projects. To add to that, I also
          honed my hardware skills working on projects with the help of an
          Arduino or a Raspberry Pi.
        </p>
        <p>
          My personal goal while coding is to write readable, easily
          maintainable, universal and reusable code. Although sometimes hard to
          achieve, I find that this mentality allows me to grow and learn as a
          developer and an individual the most.
        </p>
      </MeTextSection>

      <MeTextSection title={'What am I up to now?'}>
        <p>
          After dropping out of university in 2020, I took an amazing
          opportunity to work for a Lithuanian fintech company as a front end
          developer. Although I did not have a lot of experience working with
          front end technologies at the start, I managed to learn quickly and
          adapt to my new requirements. My day-to-day tasks make use of
          technologies such as React, Typescript, Node.js, Gatsby and others. I
          certainly learned a lot since the start of my professional career and
          I&apos;m glad such a possibility emerged.
        </p>
        <p>I plan to start studying again in autumn 2021.</p>
      </MeTextSection>

      <MeTextSection title={'Why a blog?'}>
        <p>
          I have decided to start this project mainly to learn to organize,
          write out my thoughts and share stories that maybe someone else will
          find insightful, helpful or even relatable. My goal with this project
          is to produce technical, engineering blogs/tutorials and also
          personal, thoughtful posts about my life or what I find interesting
          from the non-technical side as well.
        </p>
        <p>
          If, by any chance, someone enjoys reading it – thank you sincerely.
        </p>
      </MeTextSection>
    </>
  );
};

export default Me;
