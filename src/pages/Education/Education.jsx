import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { education } from "../../utils";
import EducationCard from "../../components/EducationCard/EducationCard";
import {
  Container,
  Wrapper,
  Title,
  Description,
  TimelineSection,
} from "./EducationStyles";

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Description>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Description>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
