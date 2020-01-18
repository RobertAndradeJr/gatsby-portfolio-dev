import React from 'react';
import { bool, func } from 'prop-types';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
);

export default Hamburger;

Hamburger.propTypes = {
  sidebar: bool,
  toggle: func,
};
