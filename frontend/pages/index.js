// import Link from 'next/link';
import Head from 'next/head';

// Import data
import { getAllPost, getAllProject, getSiteSettings } from '../graphql/requests';

// Import utils
// import { isNotEmptyArray } from '../src/utils/isEmptyUtil';
// import sortArrayByKey from '../src/utils/sortArrayByKeyUtil';

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
// import DividerWithTitle from '../src/components/primitives/DividerWithTitle';

export async function getStaticProps() {
  const dataAllProject = await getAllProject();
  const dataAllPost = await getAllPost();
  const dataSiteSettings = await getSiteSettings();
  if (!dataAllProject || !dataSiteSettings) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataAllPost,
      dataAllProject,
      dataSiteSettings,
    },
  };
}

// const Projects = ({ projects }) => {
//   const output = [];
//   if (projects && isNotEmptyArray(projects)) {
//     const projectsSorted = sortArrayByKey(projects, 'title', 'asc');
//     projectsSorted.map(d => {
//       const {
//         _id: id,
//         title,
//         slug: { current: theSlug },
//       } = d;
//       output.push(
//         <li key={id}>
//           <Link href={`/senior-frontend-developer/project/${theSlug}`}>
//             <a className="w-full inline-block px-4 py-4 sm:px-6">{title}</a>
//           </Link>
//         </li>,
//       );
//       return null;
//     });
//   }
//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-md mb-6">
//       <ul className="divide-y divide-grey-light">{output}</ul>
//     </div>
//   );
// };

const Home = ({ dataAllPost, dataAllProject, dataSiteSettings }) => (
  <Wrapper pageType="frontpage" settings={dataSiteSettings?.SiteSettings}>
    <HeroSection pageType="frontpage" settings={dataSiteSettings?.SiteSettings} />
    <ProjectsSection pageType="frontpage" items={dataAllProject?.allProject} />
    {/* <FeatureSectionWithScreenshot pageType="frontpage" /> */}
    {/* <FeatureSectionWithGrid pageType="frontpage" /> */}
    <TestimonialSection pageType="frontpage" />
    <BlogSection
      items={dataAllPost?.allPost}
      sectionTitle="Blog"
      sectionSubtitle="What's up in my world"
      sectionDescription="Articles on JavaScript and beyond, music news, musings on Fantasy books and small life events from an average dude kind of things."
    />
    <CTASection
      ctaText="Show me more!"
      ctaUrl="/music/"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."
      heading="Have a listen!"
      imageUrl="/images/Wallace-Sidhree---Futures-Past---Progressive-Rock---1200.jpg"
      pageType="frontpage"
      subHeading="I'm also a musician ???????????"
    />
    <Head>
      <title>{dataSiteSettings?.SiteSettings?.title}</title>
      <meta property="description" content={dataSiteSettings?.SiteSettings?.shortDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <DividerWithTitle align="left" title="Projects" classes="mb-8" /> */}
    {/* <Projects projects={dataAllProject?.allProject} /> */}
  </Wrapper>
);

export default Home;
