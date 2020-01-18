import React from 'react';
import { bool, func } from 'prop-types';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);

export default Sidebar;

Sidebar.propTypes = {
  sidebar: bool,
  toggle: func,
};
