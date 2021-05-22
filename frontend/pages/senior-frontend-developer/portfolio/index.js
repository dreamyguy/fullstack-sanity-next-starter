import Link from 'next/link';
import Head from 'next/head';

// Import data
import { getAllPost, getSiteSettings } from '../../../graphql/requests';

// Import utils
import { isNotEmptyArray } from '../../../src/utils/isEmptyUtil';
import sortArrayByKey from '../../../src/utils/sortArrayByKeyUtil';

// Import components
import DividerWithTitle from '../../../src/components/primitives/DividerWithTitle';

export async function getStaticProps() {
  const dataAllPost = await getAllPost();
  const dataSiteSettings = await getSiteSettings();
  if (!dataAllPost || !dataSiteSettings) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataAllPost,
      dataSiteSettings,
    },
  };
}

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

const Home = ({
  dataAllPost: { allPost } = {},
  dataSiteSettings: { SiteSettings: { title, shortDescription } = {} } = {},
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="description" content={shortDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1 className="text-xl font-bold mb-6">{title}</h1>
      <h2 className="text-xl font-bold mb-6">{shortDescription}</h2>
      <DividerWithTitle align="left" title="Blog" classes="mb-8" />
      <Posts posts={allPost} />
    </main>
  </>
);

export default Home;
