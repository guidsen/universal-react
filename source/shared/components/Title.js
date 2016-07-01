import React, { PropTypes } from 'react';

const Title = (props) => <h1 {...props}>{props.title}</h1>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
