// All requests are made from this file. When making requests from React page components,
//  we only use the exported functions from this file.

import { clientGQL } from './client';
import {
  allGitHubUsernameQuery,
  allPostQuery,
  allProjectQuery,
  postQuery,
  projectQuery,
  siteSettingsQuery,
} from './queries';

export async function getSiteSettings() {
  const { data } = await clientGQL.query({ query: siteSettingsQuery });
  return data;
}

export async function getAllGitHubUsername() {
  const { data } = await clientGQL.query({ query: allGitHubUsernameQuery });
  return data;
}

export async function getAllPost() {
  const { data } = await clientGQL.query({ query: allPostQuery });
  return data;
}

export async function getPost({ id }) {
  const {
    data: { Post },
  } = await clientGQL.query({
    query: postQuery,
    variables: { id },
  });
  return Post;
}

export async function getAllProject() {
  const { data } = await clientGQL.query({ query: allProjectQuery });
  return data;
}

export async function getProject({ id }) {
  const {
    data: { Project },
  } = await clientGQL.query({
    query: projectQuery,
    variables: { id },
  });
  return Project;
}
