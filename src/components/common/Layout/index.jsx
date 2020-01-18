import React from 'react';
import { element } from 'prop-types';
import { Footer } from 'components/theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: element,
};
