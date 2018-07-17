const getLanguageData = (fileName) => {
  global.language = "hk-cn";
  const fileData = require (`../src/common/i18n/${global.language}/${fileName}.json`);
  return fileData;
}

export {
  getLanguageData,
}