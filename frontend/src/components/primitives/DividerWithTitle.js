import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DividerWithTitle = ({ align, classes, title }) => (
  <div className={classNames('relative', classes || '')}>
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    {align === 'left' ? (
      <div className="relative flex justify-start">
        <span className="pr-3 bg-white text-lg font-medium text-gray-900">{title}</span>
      </div>
    ) : align === 'right' ? (
      <div className="relative flex justify-end">
        <span className="pl-3 bg-white text-lg font-medium text-gray-900">{title}</span>
      </div>
    ) : (
      <div className="relative flex justify-center">
        <span className="px-3 bg-white text-lg font-medium text-gray-900">{title}</span>
      </div>
    )}
  </div>
);

DividerWithTitle.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
};

export default DividerWithTitle;
