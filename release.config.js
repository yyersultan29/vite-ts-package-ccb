module.exports = {
  branches: ['master'],
  repositoryUrl: 'https://github.com/yyersultan29/vite-ts-package-ccb',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
