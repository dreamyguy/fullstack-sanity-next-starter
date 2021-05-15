/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import readingTime from 'reading-time';
import classNames from 'classnames';

const BlogSection = ({ pageType, items }) => (
  <>
    {pageType === 'frontpage' ? (
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Blog</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              What&apos;s up in my world
            </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
              Articles on JavaScript and beyond, music news, musings on Fantasy books and{' '}
              <em>small life events from an average dude</em> kind of things.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {items.map(item => {
              const imageUrl =
                item.imageUnsplash?.url && item.imageUnsplash?.useImageFromUnsplash
                  ? item.imageUnsplash?.url
                  : item.imageMain?.asset?.url || '';
              const timeToRead = readingTime(item.bodyRaw);
              return (
                <div key={item._id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  {imageUrl && (
                    <Link href={`/blog/${item.slug?.current}`}>
                      <a className="block">
                        <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
                          <img
                            className="w-full object-cover"
                            src={imageUrl}
                            alt={item.imageMain?.asset?.altText || ''}
                          />
                        </div>
                      </a>
                    </Link>
                  )}
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      {/* <p className="text-sm font-medium text-cyan-600">
                        <a href={item.category.href} className="hover:underline">
                          {item.category.name}
                        </a>
                      </p> */}
                      <Link href={`/blog/${item.slug?.current}`}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                          {item.shortDescription && (
                            <p className="mt-3 text-base text-gray-500">{item.shortDescription}</p>
                          )}
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      {item.author?.imageMain?.asset?.url && (
                        <div className="flex-shrink-0">
                          <Link href={`/about/${item.slug?.current}`}>
                            <a className="blog">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={item.author?.imageMain?.asset?.url}
                                alt={item.author?.name}
                              />
                            </a>
                          </Link>
                        </div>
                      )}
                      <div className={classNames(item.author?.imageMain?.asset?.url && 'ml-3')}>
                        <p className="text-sm font-medium text-gray-900">
                          <a href={item.author?.slug?.current} className="hover:underline">
                            {item.author?.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          {/* <time dateTime={item.datetime}>{item.date}</time> */}
                          {/* <span aria-hidden="true">&middot;</span> */}
                          {timeToRead?.minutes && <span>{timeToRead.text}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : null}
  </>
);

BlogSection.propTypes = {
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio', 'project']),
};

export default BlogSection;
