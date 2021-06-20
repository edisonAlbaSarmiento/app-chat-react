import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentTempleate,
  MainLayout,
  HeaderLayout,
  ContentLayout,
  FooterLayout,
} from './style';

const HomeTemplate = (props) => {
  const { children } = props;
  return (
    <>
      <MainLayout>
        <HeaderLayout className="header">Header</HeaderLayout>
        <ContentLayout className="content">
          <ContentTempleate>{children}</ContentTempleate>
        </ContentLayout>
        <FooterLayout className="footer">Footer</FooterLayout>
      </MainLayout>
    </>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
