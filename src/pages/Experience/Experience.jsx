/* eslint-disable react/no-unescaped-entities */
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
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
          As an aspiring Front End Developer, I've dedicated considerable time
          to self-study and collaboration with fellow coding enthusiasts to hone
          my skills. I've been committed to continuous learning,
          experimentation, and the application of theoretical knowledge in
          real-world contexts, approaching diverse technical challenges as
          opportunities for personal growth. My journey is characterized by
          perseverance, collaboration, and overcoming obstacles, laying the
          groundwork for a solid career in web development.
        </Description>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#2eadff" }} />
                  )}
                </TimelineSeparator>
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
