import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'next/link';

// Import TWUI resources
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

// Contexts
import { UiContext } from '../../contexts';

// Components
import Toggler from './../primitives/Toggler/Toggler';
import { isNotEmptyArray } from '../../utils/isEmptyUtil';

const debug = false;

const MainMenuDesktop = ({ items }) => {
  const output = [];
  if (items && isNotEmptyArray(items)) {
    items.map(item => {
      if (item.active) {
        output.push(
          <Link key={item._key} href={item.path}>
            <a className="text-base font-medium text-white hover:text-gray-300">{item.title}</a>
          </Link>,
        );
      }
      return null;
    });
  }
  return output;
};

const MainMenuMobile = ({ items }) => {
  const output = [];
  if (items && isNotEmptyArray(items)) {
    items.map(item => {
      if (item.active) {
        output.push(
          <Link key={item._key} href={item.path}>
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              {item.title}
            </a>
          </Link>,
        );
      }
      return null;
    });
  }
  return output;
};

const Header = ({ pageType, settings }) => {
  const { uiIsLoading, setUiDarkMode, uiDarkMode } = useContext(UiContext);
  debug && console.log(`[pageType]: header ${pageType}`);

  return (
    <header className={classnames('relative')}>
      <Popover as="header" className="relative z-10">
        {({ open }) => (
          <>
            <div className={classnames('bg-gray-900', 'pt-5', pageType !== 'frontpage' && 'pb-4')}>
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <a>
                        <span className="sr-only">Wallace Sidhr&eacute;e</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="/images/wallace-sidhree-logo-teal-200-cyan-400.svg"
                          alt=""
                        />
                      </a>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-8 md:flex md:ml-10">
                    <MainMenuDesktop items={settings.mainMenu} />
                  </div>
                </div>
                {!uiIsLoading && (
                  <div className="hidden md:flex md:items-center md:space-x-6">
                    <span className="text-base font-medium text-white">Dark Mode</span>
                    <Toggler
                      bgOn="bg-indigo-600 dark:bg-gray-600"
                      bgOff="bg-gray-200"
                      fgOn="bg-white dark:bg-gray-800"
                      fgOff="bg-white dark:bg-gray-800"
                      status={uiDarkMode}
                      handleTogglerStatus={() => setUiDarkMode(!uiDarkMode)}
                    />
                  </div>
                )}
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/images/wallace-sidhree-logo-teal-500-cyan-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="px-2 space-y-1">
                      <MainMenuMobile items={settings.mainMenu} />
                    </div>
                    <div className="mt-6 px-5">
                      <a
                        href="#"
                        className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                      >
                        Start free trial
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
};

Header.propTypes = {
  pageType: PropTypes.oneOf(['about', 'blog', 'frontpage', 'music', 'portfolio', 'project']),
};

export default Header;
