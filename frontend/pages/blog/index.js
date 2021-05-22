import Head from 'next/head';

// Import data
import { getAllPost, getSiteSettings } from '../../graphql/requests';
import Wrapper from '../../src/components/layout/Wrapper';
import BlogSection from '../../src/components/modules/BlogSection';

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

const BlogIndexPage = ({ dataAllPost, dataSiteSettings }) => (
  <Wrapper pageType="blog" settings={dataSiteSettings?.SiteSettings}>
    <Head>
      <title>{dataSiteSettings?.SiteSettings?.title}</title>
      <meta property="description" content={dataSiteSettings?.SiteSettings?.shortDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="mt-12 mb-20 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
      <p>
        This is the <span className="font-black">blog</span> index
      </p>
    </div>
    <BlogSection
      items={dataAllPost?.allPost}
      sectionTitle="More from the blog"
      sectionSubtitle=""
      sectionDescription=""
    />
  </Wrapper>
);

export default BlogIndexPage;
