import React from 'react';

import {
  Image,
  Heading,
  SampleWrapper,
  SampleContainer,
  Strong,
  Anchor
} from './sample.styles';

import logo from './start.png';

const SampleComponent = () => {
  return (
    <SampleContainer>
      <SampleWrapper>
        <Image src={logo} />
        <Heading>Welcome, it's React\Redux Boilerplate</Heading>
        <Strong>Edit src/App.js and save to reload.</Strong>
        <Anchor href="https://github.com/AituAbdiluly" target="_blank">
          Github
        </Anchor>
      </SampleWrapper>
    </SampleContainer>
  );
};

export default SampleComponent;
