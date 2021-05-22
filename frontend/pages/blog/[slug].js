/* eslint-disable react/destructuring-assignment */
import Head from 'next/head';

// Import data
import { getAllPost, getPost, getSiteSettings } from '../../graphql/requests';

// Components
import Wrapper from '../../src/components/layout/Wrapper';
import BlogPost from '../../src/components/modules/BlogPost';
import BlogSection from '../../src/components/modules/BlogSection';

// Use this to debug locally
const debug = false;

// Get 'id' of post by 'slug'
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

const BlogPostPage = ({ dataAllPost, dataPost, dataSiteSettings }) => (
  <Wrapper pageType="blog" settings={dataSiteSettings?.SiteSettings}>
    <Head>
      <title>{dataSiteSettings?.SiteSettings?.title}</title>
      <meta property="description" content={dataSiteSettings?.SiteSettings?.shortDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BlogPost item={dataPost} />
    <BlogSection
      items={dataAllPost?.allPost}
      sectionTitle="More from the blog"
      sectionSubtitle=""
      sectionDescription=""
    />
  </Wrapper>
);

export default BlogPostPage;
