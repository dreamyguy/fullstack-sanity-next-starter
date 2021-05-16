/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({ pageType, settings }) => (
  <>
    {pageType === 'frontpage' ? (
      <div
        className="bg-gray-900 py-10 sm:py-16 lg:py-8 lg:pb-14 lg:overflow-hidden"
        style={{
          backgroundImage: 'url(/images/915_Website_Design_Isometric_Banner--edited.svg)',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="bg-gray-900 bg-opacity-90 rounded-3xl p-8 my-24">
                <h1 className="tracking-tight font-extrabold text-white">
                  <span className="block text-4xl sm:text-6xl xl:text-6xl">{settings?.title}</span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5 text-2xl sm:text-4xl xl:text-4xl">
                    {settings?.shortDescription}
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  {settings?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

HeroSection.propTypes = {
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio', 'project']),
};

export default HeroSection;
