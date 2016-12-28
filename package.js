Package.describe({
  name: 'noxu:material-layout',
  version: '0.1.0',
  summary: "Material Design layout SASS Framework",
  git: 'https://github.com/Noxu/material-layout',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use("fourseven:scss@3.13.0");

  api.addFiles([
    'stylesheets/variables.scss',
    'stylesheets/mixins.scss',
    'stylesheets/structure.scss',
    'stylesheets/layout.scss'
  ], 'client', {isImport: true});

  api.addFiles('material-layout.scss', 'client');
});
