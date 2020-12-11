import * as React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from 'app/containers/HomePage/components/Lead';
import { SubTitle } from 'app/containers/HomePage/components/SubTitle';


export function Masthead() {
  return (
    <Wrapper>
      <Title>Home Page</Title>
      <Lead>This is hello world</Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
