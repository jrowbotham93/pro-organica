const createLanguagesObject = languages => {
  return languages.reduce((acc, elem) => {
    acc[elem] = [];
    return acc;
  }, {});
};

const localizeUrl = (language, url) => {
  return `/${language}${url}`;
};

module.exports = {
  createLanguagesObject,
  localizeUrl,
};
