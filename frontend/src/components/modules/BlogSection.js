/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import readingTime from 'reading-time';
import classNames from 'classnames';

const BlogSection = ({ items, sectionTitle, sectionSubtitle, sectionDescription }) => (
  <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
    <div className="relative">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          {sectionTitle}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {sectionSubtitle}
        </p>
        <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">{sectionDescription}</p>
      </div>
      <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        {items.map(item => {
          const imageUrl =
            item.imageUnsplash?.url && item.imageUnsplash?.useImageFromUnsplash
              ? item.imageUnsplash?.url
              : item.imageMain?.asset?.url || '';
          const imageAltTextCredit =
            item.imageUnsplash?.onwersName && item.imageUnsplash?.altText
              ? ` - Image by ${item.imageUnsplash?.onwersName}`
              : item.imageUnsplash?.onwersName && !item.imageUnsplash?.altText
              ? `Image by ${item.imageUnsplash?.onwersName}`
              : '';
          const imageAltText =
            item.imageUnsplash?.altText && item.imageUnsplash?.useImageFromUnsplash
              ? `${item.imageUnsplash?.altText}${imageAltTextCredit}`
              : !item.imageUnsplash?.altText && item.imageUnsplash?.useImageFromUnsplash
              ? imageAltTextCredit
              : item.imageMain?.asset?.altText || item.title || '';
          const imageAuthorUrl =
            item.author?.imageUnsplash?.url && item.author?.imageUnsplash?.useImageFromUnsplash
              ? item.author?.imageUnsplash?.url
              : item.author?.imageMain?.asset?.url || '';
          const imageAuthorAltTextCredit =
            item.author?.imageUnsplash?.onwersName && item.author?.imageUnsplash?.altText
              ? ` - Image by ${item.author?.imageUnsplash?.onwersName}`
              : item.author?.imageUnsplash?.onwersName && !item.author?.imageUnsplash?.altText
              ? `Image by ${item.author?.imageUnsplash?.onwersName}`
              : '';
          const imageAuthorAltText =
            item.author?.imageUnsplash?.altText && item.author?.imageUnsplash?.useImageFromUnsplash
              ? `${item.imageUnsplash?.altText}${imageAuthorAltTextCredit}`
              : !item.author?.imageUnsplash?.altText &&
                item.author?.imageUnsplash?.useImageFromUnsplash
              ? imageAuthorAltTextCredit
              : item.author?.imageMain?.asset?.altText || item.author?.title || '';
          const timeToRead = readingTime(item.bodyRaw);
          return (
            <div key={item._id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              {imageUrl && (
                <Link href={`/blog/${item.slug?.current}`}>
                  <a className="block">
                    <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
                      <img className="w-full object-cover" src={imageUrl} alt={imageAltText} />
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
                  {imageAuthorUrl && (
                    <div className="flex-shrink-0">
                      <Link href={`/about/${item.author?.slug?.current}`}>
                        <a className="blog">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={imageAuthorUrl}
                            alt={imageAuthorAltText}
                          />
                        </a>
                      </Link>
                    </div>
                  )}
                  <div className={classNames(imageAuthorUrl && 'ml-3')}>
                    <p className="text-sm font-medium text-gray-900">
                      <a href={`/about/${item.author?.slug?.current}`} className="hover:underline">
                        {item.author?.title}
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
);

BlogSection.propTypes = {
  items: PropTypes.array,
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  sectionDescription: PropTypes.string,
};

export default BlogSection;
