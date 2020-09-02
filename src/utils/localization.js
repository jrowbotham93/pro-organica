const createLanguagesObject = languages => {
  return languages.reduce((acc, elem) => {
    acc[elem] = [];
    return acc;
  }, {});
};

const localizeUrl = (language, defaultLangKey, url) => {
  return `/${language}${url}`.replace(`/${defaultLangKey}`, "");
};

module.exports = {
  createLanguagesObject,
  localizeUrl,
};
