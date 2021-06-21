import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentTempleate,
  MainLayout,
  HeaderLayout,
  ContentLayout,
  FooterLayout,
} from './style';

import { Footer } from '../../molecules';

const HomeTemplate = (props) => {
  const { children, register } = props;
  return (
    <>
      <MainLayout>
        <HeaderLayout>{register ? 'Config' : 'Chat'}</HeaderLayout>
        <ContentLayout>
          <ContentTempleate>{children}</ContentTempleate>
        </ContentLayout>
        {register && (
          <FooterLayout>
            <Footer />
          </FooterLayout>
        )}
      </MainLayout>
    </>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
