import styled from 'styled-components';
import covidImg from '../../assets/images/covid.jpg';

export const InfoContainer = styled.div`
  background-image: url(${covidImg});
  background-size: contain;
  flex: 1;
  z-index: -2;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient( 180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg,rgba(0,0,0,0.4) 0%, transparent 100%);
    z-index: -1;
  }
`;
export const InfoTitle = styled.h2`
  text-align: center;
  color: #fff;
`;
export const InfoCardContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const InfoCard = styled.div`
  border-radius: 10px;
  border: 2px solid #5d5dbe; 
  background-color: #ececec;
  box-shadow: 0px 2px 15px #f6f3f3;
  margin: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;