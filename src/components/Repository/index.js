import React from 'react';

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatStar,
  StatCount,
} from './styles';

export default function Repository({data}) {
  return (
    <Container>
      <Name>{data.fullName}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <StatStar>Stars</StatStar>
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <StatStar>Forks</StatStar>
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
