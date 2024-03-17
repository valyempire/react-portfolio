/* eslint-disable react/prop-types */
import {
  Card,
  Image,
  Tags,
  Tag,
  Details,
  Title,
  Date,
  Description,
} from "./ProjectCardsStyles";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCards;
