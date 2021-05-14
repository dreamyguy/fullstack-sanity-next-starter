/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
// ! This HOC component's purpose:
// - Set data to relevant context(s)
// - Wrap the layout around all pages

// Import dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Import contexts
import { ErrorContext, UiContext } from './../../contexts';

// Components - layout
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import Main from './Main';
// Components - modules
import BlogSection from '../modules/BlogSection';
import CTASection from '../modules/CTASection';
import FeatureSectionWithGrid from '../modules/FeatureSectionWithGrid';
import FeatureSectionWithScreenshot from '../modules/FeatureSectionWithScreenshot';
import HeroSection from '../modules/HeroSection';
import TestimonialSection from '../modules/TestimonialSection';
// Components - primitives
import Errors from '../primitives/Error/Errors';

// Import utils
import { isNotEmptyArray } from '../../utils/isEmptyUtil';

const Wrapper = ({ pageType, children, settings }) => {
  const { errors } = useContext(ErrorContext);
  const { uiDarkMode, uiIsLoading } = useContext(UiContext);

  const renderPage = () => (
    <div className={classnames(uiDarkMode ? 'dark' : '')}>
      {pageType !== 'fullscreen' ? (
        <div className="bg-white">
          <div className="relative overflow-hidden">
            <Header pageType={pageType} />
            <Main pageType={pageType}>
              <HeroSection pageType={pageType} />
              <FeatureSectionWithScreenshot pageType={pageType} />
              <FeatureSectionWithGrid pageType={pageType} />
              <TestimonialSection pageType={pageType} />
              <BlogSection pageType={pageType} />
              <CTASection pageType={pageType} />
              {children}
            </Main>
            <Footer pageType={pageType} settings={settings} />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );

  return (
    <div id="wrapper-outer">
      {uiIsLoading ? (
        <Loading loading />
      ) : errors && isNotEmptyArray(errors) ? (
        <Errors />
      ) : children ? (
        <>{renderPage()}</>
      ) : null}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio']),
};

export default Wrapper;
