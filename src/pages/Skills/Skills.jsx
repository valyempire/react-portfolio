/* eslint-disable react/jsx-key */
import { skills } from "../../utils";
import {
  Container,
  Wrapper,
  Title,
  Description,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillImage,
  SkillItem,
  SkillList,
} from "./SkillsStyles";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Description>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
