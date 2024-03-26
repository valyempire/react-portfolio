/* eslint-disable react/no-unescaped-entities */
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { experiences } from "../../utils/experiences";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import {
  Container,
  Wrapper,
  Title,
  Description,
  TimelineSection,
} from "./ExperienceStyles";

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Description>
          During my journey as a Front End Developer, I've been fortunate to
          collaborate closely with seasoned professionals, benefiting greatly
          from their guidance and constructive feedback, which have been
          instrumental in honing my skills and expanding my competencies.
          Furthermore, I've faced a variety of technical challenges and
          complexities, each presenting a unique opportunity for problem-solving
          and growth. Embracing these challenges, I've seized every chance to
          apply my knowledge in practical scenarios, fostering a deeper
          understanding of software development principles and refining my
          troubleshooting abilities. In essence, my experience as a Front End
          Developer has been characterized by a dynamic interplay of learning,
          collaboration, and overcoming obstacles, laying a solid foundation for
          my continued growth and success in the ever-evolving landscape of Web
          Development.
        </Description>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
