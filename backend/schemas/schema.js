/* eslint-disable import/no-unresolved */

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// PS: Keep anonymous object types lifted:
// https://www.sanity.io/help/schema-lift-anonymous-object-type
// TLDR; user-defined object types must live in the global scope.

// - Blog
import Author from './blog/docAuthor';
import Category from './blog/docCategory';
import Post from './blog/docPost';
// - Music
import Artist from './music/docArtist';
import ArtistURLs from './music/objArtistURLs';
import Influence from './music/docInfluence';
import Genre from './music/docGenre';
import RecordLabel from './music/docRecordLabel';
import Release from './music/docRelease';
import ReleaseURLs from './music/objReleaseURLs';
import ReleaseType from './music/docReleaseType';
// - Dev
import GitHubUsername from './development/docGitHubUsername';
import Portfolio from './development/docPortfolio';
import Project from './development/docProject';
// - Settings
import Contact from './settings/objContact';
import ImageUnsplash from './settings/objImageUnsplash';
import Menu from './settings/arrMenu';
import MenuItem from './settings/objMenuItem';
import siteSettings from './settings/docSiteSettings';
// - Internals, used by Sanity
import blockContent from './internals/arrBlockContent';

/* Create the arrays of types */

// Any base object or document
// type that should not have
// field-level validations
const types = [
  /* 0. Document types from plugins (its empty if no plugins are installed) */
  /* 1. The 'schemaTypes' */
  ...schemaTypes,
  // 2. Add other definitions here
  Contact,
  ReleaseURLs,
  ImageUnsplash,
  Menu,
  MenuItem,
  // - Blog
  Author,
  Category,
  Post,
  // - Music
  RecordLabel,
  Artist,
  ArtistURLs,
  Influence,
  Genre,
  Release,
  ReleaseType,
  // - Dev
  GitHubUsername,
  Project,
  Portfolio,
  // 3. Settings
  siteSettings,
  // 4. Internals, used by Sanity
  blockContent,
];

/* Export schema setup */
// Pass the schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  //  (at this point we have already done that by
  //  deconstructing 'schemaTypes' with the rest operator [...])
  types,
});
