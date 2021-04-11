import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MenuContext, UiContext } from '../../contexts';
import Toggler from './../primitives/Toggler/Toggler';

const Header = ({ pageType }) => {
  const { menuIsExpanded, setMenuIsExpanded } = useContext(MenuContext);
  const { uiIsLoading, setUiDarkMode, uiDarkMode } = useContext(UiContext);

  const handleMenuStatus = () => {
    setMenuIsExpanded(!menuIsExpanded);
  };
  console.log(`[pageType]: header ${pageType}`);
  return (
    <header className={classnames('relative')}>
      <span>HEADER</span>
      <button onClick={handleMenuStatus()}>HEADER</button>
      <div className="ml-4 flex items-center md:ml-6">
        {!uiIsLoading && (
          <Toggler
            bgOn="bg-indigo-600 dark:bg-gray-600"
            bgOff="bg-gray-200"
            fgOn="bg-white dark:bg-gray-800"
            fgOff="bg-white dark:bg-gray-800"
            status={uiDarkMode}
            handleTogglerStatus={() => setUiDarkMode(!uiDarkMode)}
          />
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio']),
};

export default Header;
