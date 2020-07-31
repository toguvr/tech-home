import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Button({ children, transparent }) {
  return <Container transparent={transparent}>{children}</Container>;
}

Button.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
