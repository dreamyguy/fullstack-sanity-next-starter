import BlockContent from '@sanity/block-content-to-react';

// Import utils
import { isNotEmptyObject } from '../../utils/isEmptyUtil';
import serializers from '../serializers';

// Use this to debug locally
// const debug = false;

const BlogPost = ({ post }) => {
  if (post && isNotEmptyObject(post)) {
    const { bodyRaw, title } = post;
    return (
      <>
        <h1 className="mb-8">{title}</h1>
        <BlockContent blocks={bodyRaw} serializers={serializers} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <article className="xl:divide-y xl:divide-gray-200">
            <header className="pt-6 xl:pb-10">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500">
                      <time dateTime="2021-04-14T16:01:00.000Z">Wednesday, April 14, 2021</time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    Tailwind UI: Now with React + Vue&nbsp;support
                  </h1>
                </div>
              </div>
            </header>
            <div
              className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2">
                      <img
                        src="/_next/static/media/adamwathan.689c56542418d0427d9f13696efd4ab7.jpg"
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900">Adam Wathan</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          <a
                            href="https://twitter.com/adamwathan"
                            className="text-teal-500 hover:text-teal-600"
                          >
                            @adamwathan
                          </a>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div className="prose max-w-none pt-10 pb-8">
                  <p>
                    Last year we released <a href="https://tailwindui.com">Tailwind UI</a> — a huge
                    directory of professionally designed UI examples built with Tailwind CSS. Up
                    until now, all of the examples in Tailwind UI have been pure HTML which is sort
                    of the lowest common denominator for all web developers, and makes it possible
                    to adapt them to any templating language or JavaScript framework.
                  </p>
                  <p>
                    Today we&apos;re excited to add first class support for React and Vue 3 to all
                    of the examples in Tailwind UI, which makes it even easier to adapt them for
                    your projects.
                  </p>
                  <a href="https://tailwindui.com">
                    <img
                      src="/_next/static/media/card.3d80182964bf472d96562ebad7f76065.jpg"
                      alt="Tailwind UI: Now for React and Vue"
                    />
                  </a>
                  <p>
                    It&apos;s been{' '}
                    <a href="https://blog.tailwindcss.com/building-react-and-vue-support-for-tailwind-ui">
                      a long journey
                    </a>{' '}
                    but I am super proud of where we ended up on this one, and really think
                    it&apos;s going to make Tailwind UI a useful tool for a whole new group of
                    Tailwind CSS users.
                  </p>
                  <h2>Functional and accessible</h2>
                  <p>
                    All of the React and Vue examples in Tailwind UI are powered{' '}
                    <a href="https://headlessui.dev">Headless UI</a> which is a library of
                    components we developed to decouple all of the complicated JS behavior you need
                    to build complex components like modals and dropdowns from the actual styles and
                    markup.
                  </p>
                  <p>
                    Headless UI handles all of the ARIA attribute management, keyboard interactions,
                    focus handling, and more for you, meaning all of the React and Vue examples
                    provided in Tailwind UI are fully functional, with no need to write any of that
                    complex JS stuff yourself. All of that gnarly complexity is safely tucked away
                    in your <code>node_modules</code> folder where we can make improvements and fix
                    bugs on your behalf, without you ever having to change your own code.
                  </p>
                  <h2>Fully customizable</h2>
                  <p>
                    With Headless UI, we&apos;ve managed to abstract away all of the complicated JS
                    functionality without taking away any control over the actual markup. That means
                    that the entire design is still in entirely under your control.
                  </p>
                  <p>
                    You can copy a React or Vue example from Tailwind UI and change absolutely
                    everything about it, from the border radius to the padding to the box shadows to
                    the font-size, all by simply adding utility classes like you&apos;re used to.
                  </p>
                  <h2>Get started</h2>
                  <p>
                    If you&apos;re already a Tailwind UI customer, all of this stuff is available to
                    you today as a totally free update. Just log in to your account, select between
                    HTML, React, or Vue in the dropdown above any component, and grab the code in
                    the format you want.
                  </p>
                  <p>
                    If you haven&apos;t checked out Tailwind UI yet, browse the free preview
                    components to get a feel for how it all works. It&apos;s an awesome tool for
                    moving fast on a new side-project idea, finding inspiration for a new feature
                    you need to build at work, or learning how to implement a specific little UI
                    trick with Tailwind, and a great way to support our work on open-source projects
                    like Tailwind CSS, Headless UI, and Heroicons.
                  </p>
                </div>
                <div className="pt-6 pb-16">
                  <p>
                    Want to check it out?
                    <a
                      href="https://tailwindui.com"
                      className="font-medium text-teal-500 hover:text-teal-600"
                    >
                      Visit the Tailwind UI website →
                    </a>
                  </p>
                </div>
              </div>
              <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
                <div className="space-y-8 py-8">
                  <div>
                    <h2 className="text-xs tracking-wide uppercase text-gray-500">
                      Previous Article
                    </h2>
                    <div className="text-teal-500 hover:text-teal-600">
                      <a href="/headless-ui-v1">Headless UI v1.0</a>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <a className="text-teal-500 hover:text-teal-600" href="/">
                    ← Back to the blog
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </>
    );
  }
  return null;
};

export default BlogPost;
