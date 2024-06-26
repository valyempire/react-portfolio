import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 80px 0px;
  margin-top: 0; /* Adaugă această linie */
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: -40px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
    padding: 20px;
  }
`;

// export const TimelineSection = styled.div`
//   width: 100%;
//   max-width: 1000px;
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
// `;
export const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Adăugați această linie */
  justify-content: center;
  gap: 12px;
`;
