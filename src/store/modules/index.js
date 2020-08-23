import camelCase from 'lodash.camelcase';

const requireModule = require.context('.', true, /\.js$/);

export default requireModule.keys().reduce((acc, fileName) => {
  if (fileName.match(/^(\.\/index\.js|\.\/\w+\/(?!index\.js).*)$/g)) return acc;

  const rg = fileName.includes('index')
    ? new RegExp('(\\.\\/|\\/index.js)', 'g')
    : new RegExp('(\\.\\/|\\.js)', 'g');
  const moduleName = camelCase(fileName.replace(rg, ''));

  return Object.assign(acc, { [moduleName]: requireModule(fileName).default });
}, {});
