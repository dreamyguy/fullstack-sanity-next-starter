/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Head from 'next/head';

// Import data
import { getAllPost, getPost, getSiteSettings } from '../../graphql/requests';

// Import utils
import { isNotEmptyArray, isNotEmptyObject } from '../../src/utils/isEmptyUtil';
import sortArrayByKey from '../../src/utils/sortArrayByKeyUtil';

// Use this to debug locally
const debug = false;

const getIdBySlug = (items, slug) => {
  const theItem = items.filter(f => f.slug.current === slug);
  const theItemId = theItem[0]?._id;
  debug && console.log('theItem', theItem);
  debug && console.log('theItemId', theItemId);
  return theItemId;
};

// This function gets called at build time
export async function getStaticPaths() {
  const dataAllPost = await getAllPost();
  const { allPost } = dataAllPost;
  debug && console.log('allPost', allPost);
  // Get the paths we want to pre-render based on categories
  const paths = allPost?.map(post => ({ params: { slug: post.slug?.current } }));
  debug && console.log('paths', paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataAllPost = await getAllPost();
  const { allPost } = dataAllPost;
  const dataPost = await getPost({ id: getIdBySlug(allPost, params.slug) });
  const dataSiteSettings = await getSiteSettings();
  if (!dataAllPost || !dataPost || !dataSiteSettings) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataAllPost,
      dataPost,
      dataSiteSettings,
    },
  };
}

const Post = ({ post }) => {
  if (post && isNotEmptyObject(post)) {
    const { title } = post;
    return <h1 className="mb-8">{title}</h1>;
  }
  return null;
};

const Posts = ({ posts }) => {
  const output = [];
  if (posts && isNotEmptyArray(posts)) {
    const postsSorted = sortArrayByKey(posts, 'title', 'asc');
    postsSorted.map(d => {
      const {
        _id: id,
        title,
        slug: { current: theSlug },
      } = d;
      output.push(
        <li key={id}>
          <Link href={`/blog/${theSlug}`}>
            <a className="w-full inline-block px-4 py-4 sm:px-6">{title}</a>
          </Link>
        </li>,
      );
      return null;
    });
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mb-6">
      <ul className="divide-y divide-grey-light">{output}</ul>
    </div>
  );
};

const DynamicPath = ({
  dataAllPost: { allPost } = {},
  dataPost,
  dataSiteSettings: { SiteSettings: { title, shortDescription } = {} } = {},
}) => (
  <div className="bg-grey-light h-screen w-screen py-6">
    <div
      className="
        relative
        max-w-xl
        mx-auto
      "
    >
      <Head>
        <title>{title}</title>
        <meta property="description" content={shortDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-xl font-bold mb-6">{title}</h1>
        <h2 className="text-xl font-bold mb-6">{shortDescription}</h2>
        <Post post={dataPost} />
        <Posts posts={allPost} />
      </main>
    </div>
  </div>
);

export default DynamicPath;
