import { v4 as uuidv4 } from 'uuid';
import BlockContent from '@sanity/block-content-to-react';
import classNames from 'classnames';
import Link from 'next/link';

// Import utils
import { isNotEmptyArray, isNotEmptyObject } from '../../utils/isEmptyUtil';
import serializers from '../serializers';
import { dateToString } from '../../utils/dateUtil';

// Config
import { fullDateFormat } from './../../../../config';

// Use this to debug locally
// const debug = false;

const statusStyles = {
  music: 'bg-green-100 text-green-800',
  javascript: 'bg-yellow-100 text-yellow-800',
  development: 'bg-amber-100 text-amber-800',
  fantasy: 'bg-red-100 text-red-800',
  frontend: 'bg-purple-100 text-purple-800',
};

const BlogPost = ({ item }) => {
  if (item && isNotEmptyObject(item)) {
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
        : !item.author?.imageUnsplash?.altText && item.author?.imageUnsplash?.useImageFromUnsplash
        ? imageAuthorAltTextCredit
        : item.author?.imageMain?.asset?.altText || item.author?.title || '';
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <article className="xl:divide-y xl:divide-gray-200">
          <header className="pt-6 xl:pb-10">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={item._createdAt}>
                      {dateToString(item._createdAt, fullDateFormat)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {item.title}
                </h1>
              </div>
            </div>
          </header>
          <div
            className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-6 pb-16 xl:pb-20"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
              <dt className="sr-only">Author</dt>
              <dd>
                <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    {imageAuthorUrl && (
                      <Link href={`/about/${item.author?.slug?.current}`}>
                        <a>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={imageAuthorUrl}
                            alt={imageAuthorAltText}
                          />
                        </a>
                      </Link>
                    )}
                    <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                      <dt className="sr-only">Author:</dt>
                      {/* <dd className="text-gray-900">{item.author?.title}</dd> */}
                      <dd>
                        <Link href={`/about/${item.author?.slug?.current}`}>
                          <a className="text-teal-500 hover:text-teal-600">{item.author?.title}</a>
                        </Link>
                      </dd>
                      <dt className="sr-only">About</dt>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="prose max-w-none pt-10 pb-8">
                <BlockContent blocks={item.bodyRaw} serializers={serializers} />
              </div>
              {item.categories && isNotEmptyArray(item.categories) && (
                <div className="pt-6 pb-16">
                  <p className="mb-6">Categories</p>
                  <ul>
                    {item.categories.map(c => {
                      if (c.title) {
                        return (
                          <li key={uuidv4()}>
                            <span
                              className={classNames(
                                statusStyles[c.title?.toLowerCase()],
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                              )}
                            >
                              {c.title}
                            </span>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              )}
            </div>
            <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
              {/* <div className="space-y-8 py-8">
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href="/headless-ui-v1">
                      <a>Headless UI v1.0</a>
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="pt-8">
                <Link href="/blog/">
                  <a className="text-teal-500 hover:text-teal-600" href="/blog/">
                    ← Back to the blog
                  </a>
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    );
  }
  return null;
};

export default BlogPost;
