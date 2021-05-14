/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Head from 'next/head';

// Import data
import { getAllProject, getSiteSettings } from '../graphql/requests';

// Import utils
import { isNotEmptyArray } from '../src/utils/isEmptyUtil';
import sortArrayByKey from '../src/utils/sortArrayByKeyUtil';

// Components - layout
import Wrapper from '../src/components/layout/Wrapper';
// Components - modules
import BlogSection from '../src/components/modules/BlogSection';
import CTASection from '../src/components/modules/CTASection';
// import FeatureSectionWithGrid from '../src/components/modules/FeatureSectionWithGrid';
// import FeatureSectionWithScreenshot from '../src/components/modules/FeatureSectionWithScreenshot';
import HeroSection from '../src/components/modules/HeroSection';
import ProjectsSection from '../src/components/modules/ProjectsSection';
import TestimonialSection from '../src/components/modules/TestimonialSection';
// Components - primitives
import DividerWithTitle from '../src/components/primitives/DividerWithTitle';

export async function getStaticProps() {
  const dataAllProject = await getAllProject();
  const dataSiteSettings = await getSiteSettings();
  if (!dataAllProject || !dataSiteSettings) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataAllProject,
      dataSiteSettings,
    },
  };
}

const Projects = ({ projects }) => {
  const output = [];
  if (projects && isNotEmptyArray(projects)) {
    const projectsSorted = sortArrayByKey(projects, 'title', 'asc');
    projectsSorted.map(d => {
      const {
        _id: id,
        title,
        slug: { current: theSlug },
      } = d;
      output.push(
        <li key={id}>
          <Link href={`/senior-frontend-developer/project/${theSlug}`}>
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

const Home = ({ dataAllProject, dataSiteSettings }) => (
  <Wrapper pageType="frontpage" settings={dataSiteSettings?.SiteSettings}>
    <HeroSection pageType="frontpage" settings={dataSiteSettings?.SiteSettings} />
    <ProjectsSection pageType="frontpage" />
    {/* <FeatureSectionWithScreenshot pageType="frontpage" /> */}
    {/* <FeatureSectionWithGrid pageType="frontpage" /> */}
    <TestimonialSection pageType="frontpage" />
    <BlogSection pageType="frontpage" />
    <CTASection pageType="frontpage" />
    <div className="bg-grey-light py-6">
      <div
        className="
          relative
          max-w-xl
          mx-auto
        "
      >
        <Head>
          <title>{dataSiteSettings?.SiteSettings?.title}</title>
          <meta property="description" content={dataSiteSettings?.SiteSettings?.shortDescription} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DividerWithTitle align="left" title="Projects" classes="mb-8" />
        <Projects projects={dataAllProject?.allProject} />
      </div>
    </div>
  </Wrapper>
);

export default Home;
