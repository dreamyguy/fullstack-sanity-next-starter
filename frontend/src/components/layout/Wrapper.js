/* eslint-disable react/no-unescaped-entities */
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
// Components - primitives
import Errors from '../primitives/Error/Errors';

// Import utils
import { isNotEmptyArray } from '../../utils/isEmptyUtil';

const Wrapper = ({ pageType, children, settings }) => {
  const { errors } = useContext(ErrorContext);
  const { uiDarkMode, uiIsLoading } = useContext(UiContext);

  const renderPage = () => (
    <div className={classnames('antialiased', uiDarkMode ? 'dark' : '')}>
      {pageType !== 'fullscreen' ? (
        <div className="bg-white">
          <div className="relative overflow-hidden">
            <Header pageType={pageType} />
            <Main pageType={pageType}>{children}</Main>
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
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio', 'project']),
};

export default Wrapper;
