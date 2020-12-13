import styled from 'styled-components';

export const InfoContainer = styled.div`
  flex: 1;
  /* background: url("../../assets/images/covid.jpg"); */
`;
export const InfoTitle = styled.h2`
  text-align: center;
`;
export const InfoCardContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const InfoCard = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 15px #626262;
  margin: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;