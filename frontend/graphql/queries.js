// All queries are defined on this file. When making requests from React page components,
//  or directly from 'requests.js' file, we only use the exported 'gql' template literal tags from this file.

import gql from 'graphql-tag';

export const siteSettingsQuery = gql`
  query SiteSettingsQuery {
    SiteSettings(id: "siteSettings") {
      title
      shortDescription
      description
      animateNumbers
      darkMode
      mainMenu {
        title
        path
        active
      }
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
      _createdAt
      _updatedAt
      title
      slug {
        current
      }
      shortDescription
      categories {
        title
        slug {
          current
        }
      }
      author {
        __typename
        ... on Author {
          title
          slug {
            current
          }
          imageUnsplash {
            url
            useImageFromUnsplash
            altText
            onwersName
            profileUnsplash
            profileInstagram
          }
          imageMain {
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
        }
      }
      bodyRaw
      imageUnsplash {
        url
        useImageFromUnsplash
        altText
        onwersName
        profileUnsplash
        profileInstagram
      }
      imageMain {
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
    }
  }
`;

export const postQuery = gql`
  query PostQuery($id: ID!) {
    Post(id: $id) {
      _id
      _createdAt
      _updatedAt
      title
      slug {
        current
      }
      shortDescription
      categories {
        title
        slug {
          current
        }
      }
      author {
        __typename
        ... on Author {
          title
          slug {
            current
          }
          imageUnsplash {
            url
            useImageFromUnsplash
            altText
            onwersName
            profileUnsplash
            profileInstagram
          }
          imageMain {
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
        }
      }
      bodyRaw
      imageUnsplash {
        url
        useImageFromUnsplash
        altText
        onwersName
        profileUnsplash
        profileInstagram
      }
      imageMain {
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
    }
  }
`;

export const allProjectQuery = gql`
  query AllProjectQuery {
    allProject {
      _id
      title
      slugDistribution
      slug {
        current
      }
      slogan
      shortDescription
      descriptionRaw
      imageUnsplash {
        url
        useImageFromUnsplash
        altText
        onwersName
        profileUnsplash
        profileInstagram
      }
      imageMain {
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
      slugDistribution
      slug {
        current
      }
      slogan
      shortDescription
      descriptionRaw
      imageUnsplash {
        url
        useImageFromUnsplash
        altText
        onwersName
        profileUnsplash
        profileInstagram
      }
      imageMain {
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
