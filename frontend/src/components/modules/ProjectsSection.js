import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ProjectsSection = ({ pageType, items }) => (
  <>
    {pageType === 'frontpage' ? (
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
              Open Source Projects
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Rewardingly Fun!
            </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
              Sometimes you just have to get out of your comfort zone and try something new. Push
              your own limits. The more mistakes you make the wiser you get, and you could even end
              up solving real world problems. Either way there&apos;s always a reward at the end of
              the rainbow!{' '}
              <span
                role="img"
                aria-label="rainbow"
                className="react-emojis"
                style={{ lineHeight: 1 }}
              >
                🌈
              </span>
              <span
                role="img"
                aria-label="unicorn"
                className="react-emojis"
                style={{ lineHeight: 1 }}
              >
                🦄
              </span>
            </p>
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
              return (
                <div key={item._id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  {imageUrl && (
                    <Link href={`/senior-frontend-developer/project/${item.slug?.current}`}>
                      <a className="block">
                        <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
                          <img className="w-full object-cover" src={imageUrl} alt={imageAltText} />
                        </div>
                      </a>
                    </Link>
                  )}
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <Link href={`/senior-frontend-developer/project/${item.slug?.current}`}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                          {item.shortDescription && (
                            <p className="mt-3 text-base text-gray-500">{item.shortDescription}</p>
                          )}
                        </a>
                      </Link>
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

ProjectsSection.propTypes = {
  pageType: PropTypes.oneOf(['blog', 'frontpage', 'music', 'portfolio', 'project']),
};

export default ProjectsSection;
