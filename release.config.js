/**
 * @type {import('semantic-release').GlobalConfig}
 */
export const branches = ['master'];
export const repositoryUrl =
  'https://github.com/yyersultan29/vite-ts-package-ccb';
export const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
  '@semantic-release/npm',
  '@semantic-release/github',
];
