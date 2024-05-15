import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
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
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: "#2eadff" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
