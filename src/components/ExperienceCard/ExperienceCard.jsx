/* eslint-disable react/prop-types */
import {
  Card,
  Top,
  Image,
  Body,
  Role,
  Company,
  Date,
  Description,
  Span,
  Skill,
  Skills,
  CourseList,
  ItemWrapper,
  Document,
} from "./ExperienceCardStyles";

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.courses && (
          <div>
            <br />
            <Span>Courses studied:</Span>
            <CourseList>
              {experience.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </CourseList>
          </div>
        )}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
