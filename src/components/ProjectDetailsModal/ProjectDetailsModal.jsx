/* eslint-disable react/prop-types */
import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { gitHubTitle, liveTitle } from "../../utils/projects";
import {
  Container,
  Wrapper,
  Image,
  Title,
  Date,
  Tags,
  Tag,
  Desc,
  Button,
  ButtonGroup,
} from "./ProjectDetailsModalStyles";

const ProjectDetailsModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button href={project?.github} target="_blank" title={gitHubTitle}>
              View Code
            </Button>
            <Button href={project?.webapp} target="_blank" title={liveTitle}>
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetailsModal;
