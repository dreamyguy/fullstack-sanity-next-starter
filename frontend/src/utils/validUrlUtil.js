// Validate URL
const validUrlRegex = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.%]+$/gim;

export const validUrl = url => !!url.match(validUrlRegex);
