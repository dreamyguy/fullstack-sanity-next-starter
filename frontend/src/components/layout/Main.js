import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Main = ({ children, pageType }) => (
  <main id="page-content" className={classnames('relative', pageType === 'blog' && 'pt-4 md:pt-8')}>
    {children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
