// All queries are defined on this file. When making requests from React page components,
//  or directly from 'requests.js' file, we only use the exported 'gql' template literal tags from this file.

import gql from 'graphql-tag';

export const siteSettingsQuery = gql`
  query SiteSettingsQuery {
    SiteSettings(id: "siteSettings") {
      title
      shortDescription
      description
      blogPath
      animateNumbers
      darkMode
    }
  }
`;

export const allGitHubUsernameQuery = gql`
  query AllGitHubUsernameQuery {
    allGitHubUsername {
      username
    }
  }
`;

export const allPostQuery = gql`
  query AllPostQuery {
    allPost {
      _id
      title
      slug {
        current
      }
    }
  }
`;

export const postQuery = gql`
  query PostQuery($id: ID!) {
    Post(id: $id) {
      _id
      title
      slug {
        current
      }
      bodyRaw
    }
  }
`;

export const allProjectQuery = gql`
  query AllProjectQuery {
    allProject {
      _id
      title
      slug
      slogan
      shortDescription
      descriptionRaw
      imageScreenshot {
        asset {
          url
          altText
          title
        }
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
      imageSoMe {
        asset {
          url
          altText
          title
        }
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
      isGithub
      gitHubUser {
        username
      }
      urlSource
      urlPreview
      urlDistribution
    }
  }
`;

export const projectQuery = gql`
  query ProjectQuery($id: ID!) {
    Project(id: $id) {
      _id
      title
      slug
      slogan
      shortDescription
      descriptionRaw
      imageScreenshot {
        asset {
          url
          altText
          title
        }
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
      imageSoMe {
        asset {
          url
          altText
          title
        }
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
      }
      isGithub
      gitHubUser {
        username
      }
      urlSource
      urlPreview
      urlDistribution
    }
  }
`;
