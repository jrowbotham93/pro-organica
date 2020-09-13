const createLanguagesObject = languages => {
  return languages.reduce((acc, elem) => {
    acc[elem] = [];
    return acc;
  }, {});
};

const localizeUrl = (language, defaultLangKey, url) => {
  let localURL = `/${language}${url}`.replace(`/${defaultLangKey}`, "");
  localUrl = localURL.replace("undefined", "").replace("home", "");
  return localURL;
};

module.exports = {
  createLanguagesObject,
  localizeUrl,
};
