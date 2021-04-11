import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Footer = ({ pageType }) => {
  console.log(`[pageType]: footer ${pageType}`);
  return (
    <header className={classnames('relative')}>
      <span>FOOTER</span>
    </header>
  );
};

Footer.propTypes = {
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio']),
};

export default Footer;
