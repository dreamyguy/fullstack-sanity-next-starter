import './env';

// Environments
const hostname =
  typeof window === 'object' && window.location.hostname !== ''
    ? window.location.hostname
    : 'localhost';
const inDevelopment = process.env.NODE_ENV === 'development';
const inProduction = process.env.NODE_ENV === 'production';

// Modes and feature-togglers
const animateNumbers = true;
const animateNumbersDuration = 2000; // Duration of timeout, used for 'animateNumbers'
const animateNumbersInit = 10; // Initialize timeout for 'animateNumbers'

// * ApolloClient > link > HttpLink > uri
const apiSanity = inProduction
  ? `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`
  : `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`;

// * ApolloClient > defaultOptions > query > fetchPolicy
// Use 'no-cache' to avoid caching, 'cache-first' is default
const fetchPolicy = inProduction ? 'cache-first' : 'no-cache';

// Ports
export const PORT_LOCAL_SANITY = '3000';
export const PORT_LOCAL_NEXT = '4000'; // Just a reference. This is passed at 'scripts' level in 'package.json'.
export const URL_LOCAL = `http://${hostname}`;

export const config = {
  animateNumbers,
  animateNumbersDuration,
  animateNumbersInit,
  apiSanity,
  fetchPolicy,
  hostname,
  inDevelopment,
  inProduction,
};
