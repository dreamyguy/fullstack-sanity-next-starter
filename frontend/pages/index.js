/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Head from 'next/head';

// Import data
import { getAllProject, getSiteSettings } from '../graphql/requests';

// Import utils
import { isNotEmptyArray } from '../src/utils/isEmptyUtil';
import sortArrayByKey from '../src/utils/sortArrayByKeyUtil';

// Import components
import DividerWithTitle from '../src/components/primitives/DividerWithTitle';
import Wrapper from '../src/components/layout/Wrapper';

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

const Home = ({
  dataAllProject: { allProject } = {},
  dataSiteSettings: { SiteSettings: { title, shortDescription } = {} } = {},
}) => (
  <Wrapper pageType="frontpage">
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
          <DividerWithTitle align="left" title="Projects" classes="mb-8" />
          <Projects projects={allProject} />
        </main>
      </div>
    </div>
  </Wrapper>
);

export default Home;
