import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "./myimg.jpg";

// dynamic href linking for the entire page.

// Learn react routing?
// link to hash!!! LFG!!!!

/* List Component End here */

// Regarding this issue, Will have to create a href prop and make it more reusable. Come back to this later.
export default function About() {
  return (
    <Section>
      <AboutHeader>
        <AboutHeading id="about"> About me</AboutHeading>
      </AboutHeader>
      <Container>
        <TextFlex>
          <p>
            Hi! I'm Gil Villanueva Rodriguez, I'm a software engineer from
            Laguna, Philippines.
          </p>

          <p>
            I am a passionate web developer with 5 years of experience in the
            field. I specialize in creating visually appealing, user-friendly,
            and highly functional websites using the latest web technologies and
            design principles.
          </p>
          <p>
            {" "}
            Whether it's a simple brochure website, an e-commerce platform, or a
            complex web application, I have the skills and expertise to bring
            your vision to life. I am always striving to improve my skills and
            stay up-to-date with the latest advancements in web development to
            deliver the best possible results for my clients.
          </p>
          <p> Here are some technologies I've been working with recently:</p>
          <SkillList>
            <SkillItem>Javascript(ES6)</SkillItem>
            <SkillItem>Wordpress </SkillItem>
            <SkillItem>NodeJS</SkillItem>
            <SkillItem>MySql</SkillItem>
          </SkillList>
        </TextFlex>
        <ImgFlex>
          <ImgOverlay>
            <AboutImg src={Image} alt=""></AboutImg>
          </ImgOverlay>
        </ImgFlex>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background-color: ${theme.colors.navy};
`;

const AboutHeader = styled.div`
  padding-left: 0.5em;
  padding-top: 2em;
`;

const AboutHeading = styled.h3`
  @media (min-width: 768px) {
    margin-left: 8em;
  }
  margin-left: 0.5em;
  font-family: "Calibre";
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.vLightSlate};

  ::before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-family: "SF Mono";
    font-weight: normal;
    font-size: 32px;
    color: rgb(100, 255, 218);
    font-size: 20px;
    position: relative;
    bottom: 4px;
  }

  ::after {
    content: "";
    display: block;
    height: 1px;
    width: 5em;
    background-color: rgb(48, 60, 85);
    position: relative;
    top: -20px;
    margin-left: 5.9em;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    margin-left: 10em;
    /*width:100%; */
  }
  margin-left: 2em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  border: 1rem;

  margin: 2em;
  margin-bottom: 8em;
  margin-top: 3em;
  margin-left: 1em;
  margin-right: 2em;
`;
/* Flexbox children for the container details are here. */
const TextFlex = styled.div`
  width: 60%;
  max-width: 480px;
  font-family: "Calibre";
  font-weight: 400;
  color: ${theme.colors.slate};
  font-size: 20px;
  margin-top: 0;
  padding-left: 2em;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 550px;
  }
`;

const ImgFlex = styled.div`
  position: relative;
  width: 70%;
  max-width: 400px;
  padding-left: 2em;
  margin-left: 2em;
  padding-top: 5em;

  ::after {
    height: inherit;
    display: block;
    width: 100%;
    background: #808080;
    border-right: 1px white;
    content: "";
  }

  @media (min-width: 768px) {
    width: 40%;
    max-width: 300px;
  }
`;

/* Flex End */

const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  bottom: 4em;
`;
const ImgOverlay = styled.div``;

/* List component eventually */
const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  @media (max-width: 768px) {
  }
`;
const SkillItem = styled.li`
  list-style: none;
  ::before {
    content: "▹";
    padding-right: 10px;
    font-size: 14px;
    line-height: 12px;
    color: ${theme.colors.green};
  }
`;
