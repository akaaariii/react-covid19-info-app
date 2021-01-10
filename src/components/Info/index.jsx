import React from 'react';

import { InfoContainer, InfoTitle, InfoCardContainer, InfoCard } from './styles';

const Info = ({ data }) => {

  const {cases, todayCases, deaths, todayDeaths, recovered, active, tests, affectedCountries } = data;

  return (
    <InfoContainer>
      <InfoTitle>COVID-19 data sourced from Worldometers <small>(updated every 10 minutes)</small></InfoTitle>
      <InfoCardContainer>
        <InfoCard>
          <h3>TOTAL CASES</h3>
          <span>{cases}</span>
        </InfoCard>
        <InfoCard>
          <h3>AFFECTED COUNTRIES</h3>
          <span>{affectedCountries}</span>
        </InfoCard>
        <InfoCard>
          <h3>TOTAL DEATHS</h3>
          <span>{deaths}</span>
        </InfoCard>
        <InfoCard>
          <h3>TODAY CASES</h3>
          <span>{todayCases}</span>
        </InfoCard>
        <InfoCard>
          <h3>TODAY DEATHS</h3>
          <span>{todayDeaths}</span>
        </InfoCard>
        <InfoCard>
          <h3>RECOVERED</h3>
          <span>{recovered}</span>
        </InfoCard>
        <InfoCard>
          <h3>ACTIVE CASES</h3>
          <span>{active}</span>
        </InfoCard>
        <InfoCard>
          <h3>TOTAL TESTS</h3>
          <span>{tests}</span>
        </InfoCard>
      </InfoCardContainer>
    </InfoContainer>
  )
}

export default Info;