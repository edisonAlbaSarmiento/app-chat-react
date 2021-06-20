import React from 'react';

import PropTypes from 'prop-types';
import { ContentTempleate } from './style';

const HomeTemplate = (props) => {
  const { children } = props;
  return (
    <div>
      <ContentTempleate>{children}</ContentTempleate>
    </div>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
